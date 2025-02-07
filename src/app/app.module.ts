import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { GmachSignUpComponent } from './components/gmach-sign-up/gmach-sign-up.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { SearchOrAddComponent } from './components/search-or-add/search-or-add.component';
import { UserAreaComponent } from './components/user-area/user-area.component';
import { MedicinesComponentComponent } from './components/medicines-component/medicines-component.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SignUpComponent,
    HomeComponent,
    SearchOrAddComponent,
    UserAreaComponent,
    MedicinesComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
