import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import HeaderInterface from '../../interfaces/header-interface';
import TitleInterface from '../../interfaces/title-interface';
import { TitleComponent } from '../../components/title/title.component';
import FormInterface from '../../interfaces/form-interface';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [HeaderComponent, TitleComponent, FormComponent],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent {

  appHeader:HeaderInterface = {
    className:""
  }

  profileTitle:TitleInterface = {
    className:"user-settings__profile-title align-center",
    title: "Profil utilisateur"
  }

  subscriptionsTitle:TitleInterface = {
    className:"user-settings__subscriptions-title align-center",
    title:"Abonnements"
  }

  form:FormInterface = {
    id: "user-settings-form",
    buttonsDirection: "column",
    inputs:[
      {
        id: "username",
        type: "text",
        placeholder: "Username"
      },
      {
        id: "email",
        type: "email",
        placeholder: "email@email.fr",
      },

    ],
    buttons: [
      {
        type: "button",
        id: "save-user-settings",
        textContent: "Sauvegarder"
      },
      {
        type: "button",
        id: "logout-button",
        textContent: "Se déconnecter",
        className: "button--no-border-and-red"
      }
    ]
  }
}
