import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { MdToolbar, MdButton } from '@angular/material';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css']
})
export class AppComponent {

  constructor(public af: AngularFire) {}

 login() {
    this.af.auth.login();

    // -----------------------------------------------
    // TODO: IMPLEMENT AUTH WITH USERNAME AND PASSWORD
    // -----------------------------------------------
    // this.af.auth.login(
    //   {
    //     email    : 'email@example.com', 
    //     password : 'password'
    //   },
    //   {
    //     provider : AuthProviders.Password,
    //     method   : AuthMethods.Password,
    //   });
    // -----------------------------------------------
  }

  logout() {
     this.af.auth.logout();
  }
}
