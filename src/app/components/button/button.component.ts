import { Component, EventEmitter, Input, Output } from '@angular/core';
import ButtonInterface from '../../interfaces/button-interface';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() button!:ButtonInterface;
  @Output() value = new EventEmitter<string>();

  onClick(name:string){
    if(name !== "submit" && name !== "reset"){
      this.value.emit(name);
    } else {
      console.log('submit/reset button has been clicked')
    }

  }
}
