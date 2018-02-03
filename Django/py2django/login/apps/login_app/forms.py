from django import forms
from .models import User

class RegForm(forms.ModelForm):
    first_name= forms.CharField(
    min_length=2
    )
    last_name= forms.CharField(
    min_length=2
    )
    password = forms.CharField(
        widget=forms.PasswordInput,
        min_length=8
        )
    confirm = forms.CharField(
    widget=forms.PasswordInput,
    min_length=8
    )

    class Meta:
        model = User
        fields = '__all__'

    def clean(self):
        cleaned_data = super(RegForm, self).clean()
        print cleaned_data
#class LoginForm(forms.ModelForm):
