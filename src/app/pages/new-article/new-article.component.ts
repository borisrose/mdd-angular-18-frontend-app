import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import HeaderInterface from '../../interfaces/header-interface';
import { FormComponent } from '../../components/form/form.component';
import FormInterface from '../../interfaces/form-interface';
import TitleInterface from '../../interfaces/title-interface';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [HeaderComponent, FormComponent, TitleComponent],
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.scss'
})
export class NewArticleComponent {

  appHeader:HeaderInterface = {
    className: ""
  }

  newArticleHeader:HeaderInterface = {
    className: "new-article__header"
  }

  newArticleTitle:TitleInterface = {
    title: "Créer un nouvel article"
  }

  form:FormInterface = {
    id: "new-article-form",
    inputs:[
      {
        type: "text",
        placeholder: "Sélectionner un thème"
      },
      {
        type: "text",
        placeholder: "Titre de l'artiste",
      },
      {
        type: "textarea",
        placeholder: "Contenu de l'article"
      }
    ],
    buttons: [
      {
        type: "button",
        id: "create-article",
        textContent: "Créer",
        className: "button--single"
      }
    ]
  }


}
