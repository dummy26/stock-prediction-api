from model_backend.model.keras_model.utils import InvalidPredictionDateError
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Model, Prediction, Ticker
from api.serializers import (ModelSerializer, PredictionSerializer,
                             TickerSerializer)

from .utils import get_ticker_from_symbol


@api_view(['POST'])
def train(request):
    if 'id' in request.POST:
        pk = int(request.POST['id'])
        model = Model.objects.filter(pk=pk).first()
        if model is None:
            return Response(f'No model with id={pk} found', status=status.HTTP_404_NOT_FOUND)
    else:
        name = request.POST['name'].lower()
        symbol = request.POST['ticker']
        seq_len = int(request.POST['seq_len'])
        step = int(request.POST['step'])
        epochs = 1

        ticker = get_ticker_from_symbol(symbol)
        if ticker is None:
            return Response(f'Invalid symbol: {symbol}', status=status.HTTP_404_NOT_FOUND)

        # ticker coming from request.data might be in different case so changing it to coreect value
        data = request.data.copy()
        data['ticker'] = ticker.pk
        model = Model.objects.filter(ticker=ticker, seq_len=seq_len, step=step, name=name).first()
        if model is None:
            t_serializer = ModelSerializer(data=data)
            if not t_serializer.is_valid():
                return Response(f'Invalid params', status=status.HTTP_404_NOT_FOUND)
            model = t_serializer.save()
        else:
            return Response(f'Model with name={name} seq_len={seq_len} step={step} for symbol {ticker.symbol} already exists. Please use /api/train/{model.id}/ to POST a train request.', status=status.HTTP_404_NOT_FOUND)

    epochs = int(request.POST.get('epochs', 1))
    # model.train(epochs)
    print('training......\n')
    serializer = ModelSerializer(model)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@ api_view(['GET'])
def predict(request, pk):
    pred_date = request.GET.get('pred_date')
    if pred_date is None:
        return Response('pred_date not found in query parameters', status=status.HTTP_404_NOT_FOUND)
    model = Model.objects.filter(pk=pk).first()

    if model is None:
        return Response(f'No model with id={pk} found', status=status.HTTP_404_NOT_FOUND)

    prediction_obj = Prediction.objects.filter(model=model, pred_date=pred_date).first()
    if prediction_obj is None:
        try:
            y, actual_pred_date = model.predict(pred_date)
        except InvalidPredictionDateError:
            return Response(f'Invalid prediction date given: {pred_date}', status=status.HTTP_404_NOT_FOUND)

        prediction_obj = Prediction.objects.create(model=model, pred_date=actual_pred_date, prediction=y)

    serializer = PredictionSerializer(prediction_obj)
    return Response(serializer.data, status=status.HTTP_200_OK)


@ api_view(['GET'])
def all_models(request, symbol):
    ticker = get_ticker_from_symbol(symbol)
    if ticker is None:
        return Response(f'Invalid symbol given: {symbol}', status=status.HTTP_404_NOT_FOUND)

    models = Model.objects.filter(ticker=ticker)
    serializer = ModelSerializer(models, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@ api_view(['GET'])
def all_tickers(request):
    tickers = Ticker.objects.all().order_by('symbol')
    serializer = TickerSerializer(tickers, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)
