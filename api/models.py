from django.db import models
from model_backend.data.data_processor import ScalerNotFoundError
from model_backend.model.model import ModelNotFoundError

from api.lstm_registry import lstm_registry

MAX_NUM_OF_PREDICTIONS = 4096


class Ticker(models.Model):
    symbol = models.CharField(max_length=50, primary_key=True)
    company_name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f'{self.symbol}-{self.company_name}'


class Model(models.Model):
    ticker = models.ForeignKey(Ticker, on_delete=models.CASCADE)

    def predict(self, pred_date):
        try:
            y, pred_date = lstm_registry.get_service_by_symbol(self.ticker.symbol).predict(pred_date)
        except (ModelNotFoundError, ScalerNotFoundError):
            raise PredictionError(self.ticker.symbol)

        return round(y, 2), pred_date

    def __str__(self) -> str:
        return f'{self.ticker.symbol}'


class Prediction(models.Model):
    model = models.ForeignKey(Model, on_delete=models.CASCADE)
    prediction = models.FloatField()
    actual = models.FloatField(null=True)
    pred_date = models.DateField()

    def __str__(self) -> str:
        return f'{self.model.ticker.symbol} {self.prediction} {self.pred_date} '


class PredictionError(Exception):
    def __init__(self, ticker: str) -> None:
        msg = f"Could not predict for ticker: {ticker} because of missing files on server."
        super().__init__(msg)
