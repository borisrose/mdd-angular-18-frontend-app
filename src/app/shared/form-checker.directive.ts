import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFormChecker]',
  // standalone: true,
  providers: [
    {provide: NG_VALIDATORS, useExisting: FormCheckerDirective, multi: true},
  ],
})
export class FormCheckerDirective implements Validator {

  constructor() { }
  formCheckerDirective(){

  }
  validate(control: AbstractControl): ValidationErrors | null {
    return formCheckerDirective(control);
  }

}
