from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django import forms
from django.forms import fields


class UserCreateForm(UserCreationForm):
    # email = forms.EmailField(required=True, max_length=100)

    class Meta:
        model = User
        fields = ("username","password1", "password2")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs["class"] = "form-control"


class LoginForm(AuthenticationForm):
    email = forms.EmailField(required=True, max_length=100)

    class Meta:
        model = User
        fields = ("email", "password")

    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs['class'] = 'form-control'
