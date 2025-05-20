import { Component, OnInit } from '@angular/core';
import { CalendarDay } from './calendar.module';
import { ChunkPipe } from './chunk.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ChunkPipe, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public calendar: CalendarDay[] = [];
  ngOnInit(): void {
    this.generateCalendarDays();
  }

  private generateCalendarDays(): void {
    this.calendar = [];

    let day: Date = new Date();
    let startingDateOfCalendar = this.getStartDateForCalendar(day);

    let dateToAdd = startingDateOfCalendar;

    for (let i = 0; i < 42; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  private getStartDateForCalendar(selectedDate: Date): Date {
    let lastDayOfPreviousMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);
    let startingDateOfCalendar: Date = new Date(lastDayOfPreviousMonth);

    if (startingDateOfCalendar.getDay() != 1) {
      do {
        startingDateOfCalendar = new Date(startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1));
      } while (startingDateOfCalendar.getDay() != 1);
    }

    return startingDateOfCalendar;
  }

}
