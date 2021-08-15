# Generated by Django 3.2.6 on 2021-08-12 06:06

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Model',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seq_len', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('step', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Ticker',
            fields=[
                ('symbol', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('company_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Prediction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prediction', models.FloatField()),
                ('pred_date', models.DateField()),
                ('model', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.model')),
            ],
        ),
        migrations.AddField(
            model_name='model',
            name='ticker',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.ticker'),
        ),
    ]