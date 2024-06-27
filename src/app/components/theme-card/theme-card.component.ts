import { Component, Input } from '@angular/core';
import ThemeInterface from '../../interfaces/theme-interface';

@Component({
  selector: 'app-theme-card',
  standalone: true,
  imports: [],
  templateUrl: './theme-card.component.html',
  styleUrl: './theme-card.component.scss'
})
export class ThemeCardComponent {
  @Input() theme!:ThemeInterface


  onClick(){
    console.log('button has been clicked on')
  }
}
