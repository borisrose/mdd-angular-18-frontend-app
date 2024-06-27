import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import ButtonInterface from '../../interfaces/button-interface';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    buttons:Array<ButtonInterface> = [
        {
          id:"login",
          type:"button",
          textContent:"Se connecter",
          className: "button--no-bg"

        },
        {
          id:"register",
          type:"button",
          textContent: "S'inscrire",
          className: "button--no-bg"
        }
    ]

    constructor(private router:Router){}

    onClick(navOption:string){
      if(navOption == "login"){
        this.router.navigate(['login'])
      }
      if(navOption == "register"){
        this.router.navigate(['register'])
      }
    }

}
