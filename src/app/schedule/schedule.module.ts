import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { ScheduleService } from './schedule.service';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';


const routes: Routes = [
  { path: "", pathMatch: 'full', component: ScheduleComponent },
  {path: "schedule/scheduleList", pathMatch:'full', component: ScheduleListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScheduleComponent, ScheduleListComponent],
  exports: [ScheduleComponent, RouterModule],
  providers: [ScheduleService]
})
export class ScheduleModule { }