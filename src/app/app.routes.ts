import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "articles",
    component: ArticlesComponent
  },
  {
    path: "themes",
    component: ThemesComponent
  },
  {
    path: "user-settings",
    component: UserSettingsComponent
  },
  {
    path: "new-article",
    component: NewArticleComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
];
