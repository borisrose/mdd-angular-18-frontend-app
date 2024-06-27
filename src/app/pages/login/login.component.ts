import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import TitleInterface from '../../interfaces/title-interface';
import { HeaderComponent } from '../../components/header/header.component';
import HeaderInterface from '../../interfaces/header-interface';
import { NgIf } from '@angular/common';
import FormInterface from '../../interfaces/form-interface';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, TitleComponent, NgIf, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  title:TitleInterface = {
    title: "Se connecter",
    className: "login__title align-center"
  }


  mainHeader:HeaderInterface = {
    className: "login__header"
  }

  form:FormInterface = {
    id: "login-form",
    inputs:[
      {
        id: "email",
        type: "email",
        label: "Email ou nom d'utilisateur"
      },
      {
        id:"password",
        type: "password",
        label: "Mot de passe",
      },
    ],
    buttons: [
      {
        type: "button",
        id: "login-button",
        textContent: "Se connecter",
        className: "button--single"
      }
    ]
  }
}
