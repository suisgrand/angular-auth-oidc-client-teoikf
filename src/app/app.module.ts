import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRouteModule} from './app-route.module';
import {ConfigurationService} from './core/configuration.service';

import {AuthenticationModule} from './auth/authentication.module';

function loadAppConfig(configService: ConfigurationService){
    return ()=>{configService.load();};
}

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouteModule, AuthenticationModule ],
  declarations: [ AppComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      deps: [ConfigurationService],
      useFactory: loadAppConfig,
      multi:true
    }
  ]
})
export class AppModule {
   }
