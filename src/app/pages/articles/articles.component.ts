import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import HeaderInterface from '../../interfaces/header-interface';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  appHeader:HeaderInterface = {
    className:""
  }

  button = {
    id: "create-article",
    type: "button",
    textContent: "Créer un article"
  }

  constructor(private router:Router){}

  onClick(){
    console.log('create an article')
    this.router.navigate(["new-article"])

  }
}
