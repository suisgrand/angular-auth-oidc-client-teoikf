import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleModule  } from './schedule/schedule.module';
import {ScheduleComponent} from './schedule/schedule.component';

const rootRoutes: Routes = [
  { path: "", pathMatch: 'full', component: DashboardComponent },
  { path: 'schedule', pathMatch: 'full', component: ScheduleComponent },
  { path: "**", pathMatch: 'full', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    RouterModule,
    RouterModule.forRoot(rootRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }