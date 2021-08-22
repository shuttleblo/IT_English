from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django import forms


class UserCreateForm(UserCreationForm):
    # def save(self, commit=True):
    #     user = super(UserCreateForm, self).save(commit=False)
    #     if commit:
    #         user.save()
    #     return user
    password1 = forms.CharField(label='Enter password',
                                widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm password',
                                widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ("username", "password1", "password2")
        help_texts = {
            'username': None,
            'password1': None,
        }


class LoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['class'] = 'form-control'
        self.fields['password'].widget.attrs['class'] = 'form-control'
