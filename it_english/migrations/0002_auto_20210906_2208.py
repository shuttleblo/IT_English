# Generated by Django 3.2.5 on 2021-09-06 13:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('it_english', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdministratorModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Quiz_levelModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.CharField(max_length=20)),
            ],
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
        migrations.CreateModel(
            name='QuizModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quiz', models.CharField(max_length=20)),
                ('answer', models.CharField(max_length=20)),
                ('administrator_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='it_english.administratormodel')),
            ],
        ),
        migrations.CreateModel(
            name='Quiz_quiz_levelModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quiz_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='it_english.quizmodel')),
                ('quiz_level_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='it_english.quiz_levelmodel')),
            ],
        ),
        migrations.CreateModel(
            name='Answer_historyModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('selectes_level', models.CharField(max_length=20)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='it_english.usermodel')),
            ],
        ),
        migrations.CreateModel(
            name='Answer_detail_historyModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer_history_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='it_english.answer_historymodel')),
                ('quiz_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='it_english.quizmodel')),
            ],
        ),
    ]
