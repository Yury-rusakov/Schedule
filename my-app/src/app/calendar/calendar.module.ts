export class CalendarDay {
    public date: Date;
    public title: string | undefined;
    public isPastDate: boolean;
    public isToday: boolean;
  
    constructor(d: Date) {
      this.date = d;
      const today = new Date();
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
      this.isPastDate = dayStart < todayStart;
      this.isToday = dayStart.getTime() === todayStart.getTime();
    }
  }