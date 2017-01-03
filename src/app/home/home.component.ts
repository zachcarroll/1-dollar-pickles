import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public af: AngularFire) {}

  ngOnInit() {
    // if user is authenticated, take them to the pickle jar page
    this.af.auth.subscribe((auth) => {
      if ( auth && auth.uid ) {
        this.router.navigateByUrl("/pickle-jar");
      }
    });
  }

}
