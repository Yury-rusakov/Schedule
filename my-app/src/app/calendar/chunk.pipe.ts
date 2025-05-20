import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "chunk",
  standalone: true
})
export class ChunkPipe implements PipeTransform {

  transform(calendarDaysArray: any[], chunkSize: number): any[][] {
    if (!calendarDaysArray) {
      return []; // Ensure to return an array
    }

    const calendarDays: any[][] = [];
    let weekDays: any[] = [];

    calendarDaysArray.forEach((day, index) => {
      weekDays.push(day);
      if ((index + 1) % chunkSize === 0) {
        calendarDays.push(weekDays);
        weekDays = [];
      }
    });

    if (weekDays.length > 0) {
      calendarDays.push(weekDays);
    }

    return calendarDays;
  }
}
