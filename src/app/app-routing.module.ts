import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component'; 
import { UserLoginComponent } from './components/user-login/user-login.component';
import { SearchOrAddComponent } from './components/search-or-add/search-or-add.component';
import { UserAreaComponent } from './components/user-area/user-area.component';
import { MedicinesComponentComponent } from './components/medicines-component/medicines-component.component';


//מערך הניתובים
const routes: Routes = [
//מערך זה יקבל אובייקטים במבנה הבא
// {path:'mypath', component:myComp}
// באובייקטי יש שני מאפיינים:
//1. - התוכן שיהיה כתוב בניתוב
//2. - איזה רכיב להציג בניתוב זה

// מה אני צריכה להציג בדף הנ"ל
// דף הבית, 
{path:'Home', component:MedicinesComponentComponent},
{path:'Login', component:UserLoginComponent},
{path:'SignUp', component:SignUpComponent},
{path: 'Search',component:SearchOrAddComponent},
{path:'UserArea',component:UserAreaComponent}

// {path:'Search', component:},
// {path:'Enter', component:},
// {path:'UserArea', component:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
