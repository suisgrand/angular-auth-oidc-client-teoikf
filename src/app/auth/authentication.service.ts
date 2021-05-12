import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { OidcConfigService, AuthConfiguration, OidcSecurityService, AuthWellKnownEndpoints, OpenIDImplicitFlowConfiguration } from 'angular-auth-oidc-client'

@Injectable()
export class AuthenticationService {

  constructor(
    private _oidcConfigService: OidcConfigService,
    private _oidcSecurityService: OidcSecurityService
  ) {

    console.log('service - constr', this.accessToken);
    this._oidcConfigService.onConfigurationLoaded
      .subscribe(isLoaded => {
        if (isLoaded) {
          console.log('oidc config loaded');
              console.log('service - constr', this.accessToken);
          const implicitFlowConfig = new OpenIDImplicitFlowConfiguration();
          Object.assign(implicitFlowConfig, this._oidcConfigService.clientConfiguration);
          this._oidcSecurityService.setupModule(implicitFlowConfig, this._oidcConfigService.wellKnownEndpoints);
        }
      });

    if (this._oidcSecurityService.moduleSetup) {
      this._oidcSecurityService.authorizedImplicitFlowCallback()
    }
    else {
      this._oidcSecurityService.onModuleSetup.subscribe(d => {
        this._oidcSecurityService.authorizedImplicitFlowCallback()
      })
    }

    this._oidcConfigService.load('assets/auth.clientConfiguration.json');
  }

  сonfigLoaded(): Observable<boolean> {
    // this._authConfiguration.init(this.implicitFlowConfig);
    return this._oidcConfigService.onConfigurationLoaded;
  }

  onModuleSetup(): Observable<boolean> {
    return this._oidcSecurityService.onModuleSetup;
  }

  get moduleSetup() {
    return this._oidcSecurityService.moduleSetup
  }

  get accessToken(): string {
    return this._oidcSecurityService.getToken()
  }

  login(): void {
    this._oidcSecurityService.setCustomRequestParameters({ "audience": this._oidcConfigService.clientConfiguration.audience });
    return this._oidcSecurityService.authorize();
  }

  logoff(): void {
    this._oidcSecurityService.logoff()
  }

  isAuthorized(): Observable<boolean> {
    return this._oidcSecurityService.getIsAuthorized();
  }

  getUserData(): Observable<any> {
    return this._oidcSecurityService.getUserData();
  }

  authorizedImplicitFlowCallback() {
    this._oidcSecurityService.authorizedImplicitFlowCallback();
  }

  authorizedCallbackWithCode() {
    this._oidcSecurityService.authorizedCallbackWithCode(window.location.toString());
  }
}