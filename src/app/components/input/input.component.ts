import { Component, EventEmitter, Input, Output } from '@angular/core';
import InputInterface from '../../interfaces/input-interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() input!:InputInterface
  @Output() value = new EventEmitter<void>();

  onInputChange(ev:string){
    this.value.emit()
  }
}
