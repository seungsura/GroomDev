# Generated by Django 4.0.2 on 2023-06-14 11:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Projectinfo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appinfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appname', models.CharField(max_length=255)),
                ('appDescription', models.TextField()),
                ('projectname', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='apps', to='Projectinfo.projectinfo')),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='Projectinfo.projectinfo')),
            ],
        ),
    ]
