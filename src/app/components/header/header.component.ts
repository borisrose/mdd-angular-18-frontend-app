import { Component, Input } from '@angular/core';
import HeaderInterface from '../../interfaces/header-interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgIf } from '@angular/common';
import { TitleComponent } from '../title/title.component';
import { NavComponent } from '../nav/nav.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, TitleComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() header!:HeaderInterface;
  faNavBack:IconDefinition = faArrowLeft;
  isLoggedIn:boolean = false;

  constructor(){}

  onClickNavBack(){
    console.log('nav back')
  }

}
