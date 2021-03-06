import time

from model_backend.model.keras_model.utils import InvalidPredictionDateError
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Model, Prediction, PredictionError, Ticker
from api.serializers import (ModelSerializer, PredictionSerializer,
                             TickerSerializer)
from api.utils import (get_actual_from_symbol_and_pred_date, get_pred_date_from_request, get_predictions_for_period, get_saved_prediction_from_model_and_pred_date,
                       get_ticker_from_symbol)


@ api_view(['GET'])
def prediction(request, symbol):
    ticker = get_ticker_from_symbol(symbol)
    if ticker is None:
        return Response(f'Invalid symbol given: {symbol}', status=status.HTTP_404_NOT_FOUND)

    model = Model.objects.filter(ticker=ticker).first()
    if model is None:
        return Response(f'No model for ticker: {ticker} found', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    pred_date = get_pred_date_from_request(request)
    if pred_date is None:
        return Response('pred_date not found in query parameters', status=status.HTTP_404_NOT_FOUND)

    prediction_obj = get_saved_prediction_from_model_and_pred_date(model, pred_date)
    if prediction_obj is None:
        try:
            start = time.monotonic()
            y, pred_date = model.predict(pred_date)
            y = round(float(y), 2)
            print('views predict', time.monotonic() - start)
        except InvalidPredictionDateError:
            return Response(f'Invalid prediction date given: {pred_date}', status=status.HTTP_404_NOT_FOUND)
        except PredictionError as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        prediction_obj = Prediction.objects.create(model=model, pred_date=pred_date, prediction=y, actual=get_actual_from_symbol_and_pred_date(ticker.symbol, pred_date))

    serializer = PredictionSerializer(prediction_obj)
    return Response(serializer.data, status=status.HTTP_200_OK)


# It return predictions till latest_pred_date - 1 because we have actual data only till this date
@ api_view(['GET'])
def predictions(request, symbol):
    ticker = get_ticker_from_symbol(symbol)
    if ticker is None:
        return Response(f'Invalid symbol given: {symbol}', status=status.HTTP_404_NOT_FOUND)

    model = Model.objects.filter(ticker=ticker).first()
    if model is None:
        return Response(f'No model for ticker: {ticker} found', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    try:
        period = int(request.GET.get('period', 7))
        if period < 1:
            return Response(f'Invalid value of period given, it should be >= 1', status=status.HTTP_404_NOT_FOUND)
    except ValueError:
        return Response(f'Invalid value of period given, it should be an integer', status=status.HTTP_404_NOT_FOUND)

    try:
        predictions = get_predictions_for_period(period, model)
    except PredictionError as e:
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    serializer = PredictionSerializer(predictions, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@ api_view(['GET'])
def all_models(request):
    models = Model.objects.all()
    serializer = ModelSerializer(models, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@ api_view(['GET'])
def all_tickers(request):
    tickers = Ticker.objects.all().order_by('symbol')
    serializer = TickerSerializer(tickers, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)
