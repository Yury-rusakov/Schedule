import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ScheduleComponent,
    CalendarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
