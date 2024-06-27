import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import HeaderInterface from '../../interfaces/header-interface';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import ArticleInterface from '../../interfaces/article-interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDownWideShort, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, FontAwesomeModule, ArticleCardComponent,NgForOf],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  faSorting:IconDefinition = faArrowDownWideShort


  button = {
    id: "create-article",
    type: "button",
    textContent: "Créer un article"
  }

  sortingButton = {
    id: "sorting-button",
    type: "button",
    textContent: "Trier par",
    className: "button--no-border-and-black"
  }

  articles:Array<ArticleInterface> = [
    {
      id:1,
      title: "article 1",
      date: "2000/20/12",
      author: "caroline mireille",
      content: "Sit culpa nisi laborum aute Lorem ipsum aute reprehenderit consequat ipsum sunt voluptate reprehenderit ullamco. Sunt non Lorem eu labore nisi do excepteur aliqua occaecat laboris nisi dolore sit. Et elit labore reprehenderit exercitation est aliquip nulla incididunt duis reprehenderit aute. Dolor et ipsum nostrud aliquip enim reprehenderit magna reprehenderit proident ad esse. Aute Lorem cupidatat esse deserunt minim exercitation laborum nisi irure esse. Minim aute dolor ipsum consequat proident sint sint et magna. Et aliqua magna officia ut nisi sunt anim eiusmod occaecat consectetur elit ullamco ullamco.Lorem ipsum Velit culpa ad nulla aliqua commodo quis elit nostrud eu ex nostrud pariatur. Enim esse laborum occaecat incididunt mollit velit dolor. Consequat consequat fugiat nostrud anim anim ad nostrud irure labore esse et enim nostrud laboris. Enim cupidatat eiusmod quis deserunt Lorem sunt.Laboris irure eu culpa velit reprehenderit adipisicing aute. Sunt anim minim incididunt nisi quis commodo dolor sint consequat. Eu sint Lorem eiusmod nisi labore tempor sit ex labore. Duis eu esse enim magna officia sint do. Eu culpa magna consectetur consectetur mollit deserunt labore sit esse fugiat."
    },
    {
      id:2,
      title: "article 2",
      date: "2000/20/12",
      author: "babacar nba",
      content: " Lorem ipsum Velit culpa ad nulla aliqua commodo quis elit nostrud eu ex nostrud pariatur. Enim esse laborum occaecat incididunt mollit velit dolor. Consequat consequat fugiat nostrud anim anim ad nostrud irure labore esse et enim nostrud laboris. Enim cupidatat eiusmod quis deserunt Lorem sunt."
    },
    {
      id:3,
      title: "article 3",
      date: "2000/20/12",
      author: "guillaume samuelson",
      content: "Lorem ipsum Velit culpa ad nulla aliqua commodo quis elit nostrud eu ex nostrud pariatur. Enim esse laborum occaecat incididunt mollit velit dolor. Consequat consequat fugiat nostrud anim anim ad nostrud irure labore esse et enim nostrud laboris. Enim cupidatat eiusmod quis deserunt Lorem sunt."
    },
    {
      id:4,
      title: "article 4",
      date: "2000/20/12",
      author: "guillaume samuelson",
      content: "Lorem ipsum Velit culpa ad nulla aliqua commodo quis elit nostrud eu ex nostrud pariatur. Enim esse laborum occaecat incididunt mollit velit dolor. Consequat consequat fugiat nostrud anim anim ad nostrud irure labore esse et enim nostrud laboris. Enim cupidatat eiusmod quis deserunt Lorem sunt."
    },
    {
      id:5,
      title: "article 5",
      date: "2000/20/12",
      author: "guillaume samuelson",
      content: "Lorem ipsum Velit culpa ad nulla aliqua commodo quis elit nostrud eu ex nostrud pariatur. Enim esse laborum occaecat incididunt mollit velit dolor. Consequat consequat fugiat nostrud anim anim ad nostrud irure labore esse et enim nostrud laboris. Enim cupidatat eiusmod quis deserunt Lorem sunt."
    }
  ]

  constructor(private router:Router){}

  onClick(){
    console.log('create an article')
    this.router.navigate(["new-article"])

  }
}
