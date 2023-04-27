# Generated by Django 4.2 on 2023-04-13 00:25

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('django_tareas', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='tareasInformacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descripcionTarea', models.CharField(default='', max_length=512)),
                ('fechaInicio', models.DateField(default=datetime.date.today)),
                ('fechaFin', models.DateField(default=datetime.date.today)),
                ('estadoTarea', models.CharField(default='PROCESO', max_length=32)),
                ('usuarioRelacionado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
