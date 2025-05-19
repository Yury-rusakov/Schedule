import { Component, OnInit  } from '@angular/core';
import { ScheduleItem } from './schedule.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  schedule: ScheduleItem[] = [
    { date: new Date(2024, 0, 20), time: '08:00', train: 'Train 1' },
    { date: new Date(2024, 0, 20), time: '10:00', train: 'Train 2' },
    { date: new Date(2024, 0, 21), time: '12:00', train: 'Train 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
