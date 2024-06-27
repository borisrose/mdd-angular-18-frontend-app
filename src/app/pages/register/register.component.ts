import { Component } from '@angular/core';
import TitleInterface from '../../interfaces/title-interface';
import { TitleComponent } from '../../components/title/title.component';
import HeaderInterface from '../../interfaces/header-interface';
import FormInterface from '../../interfaces/form-interface';
import { HeaderComponent } from '../../components/header/header.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, TitleComponent, FormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  title:TitleInterface = {
    title: "S'inscrire",
    className: "register__title align-center"
  }


  appHeader:HeaderInterface = {
    className: "",
  }

  mainHeader:HeaderInterface = {
    className: "register__header"
  }


  form:FormInterface = {
    id: "register-form",
    inputs:[
      {
        id: "username",
        type: "text",
        label: "Nom d'utilisateur"
      },

      {
        id: "email",
        type: "email",
        label: "Adresse e-mail"
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
        id: "register-button",
        textContent: "S'inscrire",
        className: "button--single"
      }
    ]
  }
}
