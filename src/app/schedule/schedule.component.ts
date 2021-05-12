import { Component, OnInit } from '@angular/core';

import {ScheduleService} from './schedule.service';
import {ISchedule} from './interfaces'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: ISchedule[] = [];
  activeSchedule: ISchedule;

  constructor(private _scheduleService: ScheduleService) { }

  ngOnInit() {
    this._scheduleService.getSchedule().subscribe(d=>{
      this.schedules = d;
    });
  }

}