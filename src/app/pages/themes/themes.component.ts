import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import HeaderInterface from '../../interfaces/header-interface';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss'
})
export class ThemesComponent {

  appHeader:HeaderInterface = {}
}
