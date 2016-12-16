import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey            : "AIzaSyCEhDtazttRvXn6_QiGlFHmkzs7SWCtMPc",
  authDomain        : "dollar-pickles.firebaseapp.com",
  databaseURL       : "https://dollar-pickles.firebaseio.com",
  storageBucket     : "dollar-pickles.appspot.com",
  messagingSenderId : "166547623876"
};

const firebaseAuthConfig = {
  provider : AuthProviders.Google,
  method   : AuthMethods.Redirect
}

// -----------------------------------------------
// TODO: ADD REAL ROUTES HERE
// -----------------------------------------------
const appRoutes: Routes = [
  // { path : 'about', component: AboutComponent },
  // { path : '',      component: HomeComponent },
  // { path : '**',    component: NotFoundComponent }
];
// -----------------------------------------------

@NgModule({
  declarations : [
    AppComponent
  ],
  imports      : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers    : [],
  bootstrap    : [AppComponent]
})
export class AppModule { }
