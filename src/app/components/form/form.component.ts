import { Component, Input } from '@angular/core';
import FormInterface from '../../interfaces/form-interface';
import { TitleComponent } from '../title/title.component';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [TitleComponent,ButtonComponent, InputComponent, NgForOf, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() form!:FormInterface;

  onInputChange(event:string){
    console.log("✅ event: ", event)
  }
  onSubmit(){

  }

}
