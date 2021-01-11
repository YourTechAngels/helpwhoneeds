# Generated by Django 3.1.4 on 2021-01-01 16:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('GRO', 'Groceries'), ('PHA', 'Pharmacy'), ('DOG', 'Dog Walk'), ('HOS', 'Hospital Appointment'), ('CHAT', 'Friendly Chat'), ('ANY', 'Other Task')], max_length=5)),
                ('description', models.TextField(default='')),
                ('dbs_needed', models.BooleanField(default=False)),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('min_duration', models.DurationField(default=datetime.timedelta(seconds=1800))),
                ('status', models.CharField(choices=[('OP', 'Open'), ('EXP', 'Expired'), ('AS', 'Assigned'), ('CL', 'Canceled'), ('DN', 'Completed')], max_length=5)),
            ],
        ),
    ]