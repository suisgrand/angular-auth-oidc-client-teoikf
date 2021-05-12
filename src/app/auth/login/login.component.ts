import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthorized: Boolean;
  userData: any;
  accessToken: string;

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this._authenticationService.isAuthorized().subscribe(d => {
      console.log('authenticationService.isAuthorized=', d)
      this.isAuthorized = d;
      this.accessToken = this._authenticationService.accessToken;
    });

    this._authenticationService.getUserData().subscribe(d => {
      console.log('authenticationService.getUserData()=', d)
      this.userData = d;
    });
  }

  loadConfig() {
    //this._authenticationService.loadConfig();
  }

  login() {
    this._authenticationService.login();
  }

  logoff() {
    this._authenticationService.logoff();
  }

}