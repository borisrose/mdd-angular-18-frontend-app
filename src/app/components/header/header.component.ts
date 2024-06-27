import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import HeaderInterface from '../../interfaces/header-interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgIf } from '@angular/common';
import { TitleComponent } from '../title/title.component';
import { NavComponent } from '../nav/nav.component';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, TitleComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() header?:HeaderInterface;
  faNavBack:IconDefinition = faArrowLeft;
  isLoggedIn:boolean = false;
  routePath!:string;
  routerInfoSubscription!:Subscription

  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.routerInfoSubscription = this.route.url.subscribe((val:Array<UrlSegment>) => {
      this.routePath = val[0].path
    })

  }

  onClickNavBack(){
    switch(this.routePath){
      case "login":
        this.router.navigate(["home"])
        break;
      case "register":
        this.router.navigate(["home"])
        break;
      case "new-article":
        this.router.navigate(["articles"])
        break;
      default:
        this.router.navigate(["home"])
        break;

    }

  }

  ngOnDestroy(): void {
      this.routerInfoSubscription.unsubscribe()
  }

}
