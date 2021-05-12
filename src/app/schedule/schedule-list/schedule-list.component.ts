import { Component, OnInit, Input } from '@angular/core';
import {ISchedule} from '../interfaces'

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

 @Input() items: ISchedule[];

  constructor() { }

  ngOnInit() {
  }

}