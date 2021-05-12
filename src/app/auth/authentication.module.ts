import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'

import {AuthModule} from 'angular-auth-oidc-client';

import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule.forRoot()
  ],
  declarations: [LoginComponent],
  providers: [AuthenticationService],
  exports:[LoginComponent]
})
export class AuthenticationModule { }