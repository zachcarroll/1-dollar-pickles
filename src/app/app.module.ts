import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PickleJarComponent } from './pickle-jar/pickle-jar.component';

// TODO: MOVE FIREBASE CONFIG TO ANOTHER FILE
// TODO: MOVE ROUTES TO ANOTHER FILE

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

const appRoutes: Routes = [
  { path : 'pickle-jar', component : PickleJarComponent },
  { path : 'about',      component : AboutComponent },
  { path : '',           component : HomeComponent },
  { path : '**',         component : NotFoundComponent }
];

@NgModule({
  declarations : [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    PickleJarComponent
  ],
  imports      : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers    : [],
  bootstrap    : [AppComponent]
})
export class AppModule { }
