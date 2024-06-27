import { Component, Input } from '@angular/core';
import TitleInterface from '../../interfaces/title-interface';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input() title!:TitleInterface;
}
