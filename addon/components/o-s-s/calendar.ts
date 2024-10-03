import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import moment, { type Moment } from 'moment';

enum CalendarViewtype {
  month = 'month',
  months = 'months',
  year = 'year'
}

export default class CalendarComponent extends Component {
  @tracked currentDate: Moment = moment();
  @tracked selectedDay: Moment | null = null;
  @tracked currentCalendarView: CalendarViewtype = CalendarViewtype.month;

  get yearsRange(): number[] {
    const currentYear = moment().year();
    const startYear = currentYear - 20;
    const endYear = currentYear + 20;
    return Array.from({ length: endYear - startYear + 1 }, (v, i) => startYear + i);
  }

  get weekDays(): string[] {
    return moment.weekdaysShort();
  }

  get currentMonthName(): string {
    return this.currentDate.format('MMMM');
  }

  get currentYear(): number {
    return this.currentDate.year();
  }

  get today(): number | null {
    const today = moment();
    return today.isSame(this.currentDate, 'month') ? today.date() : null;
  }

  get monthsOfYear(): string[] {
    return moment.months();
  }

  get calendarDays() {
    const startOfMonth = this.currentDate.clone().startOf('month');
    const endOfMonth = this.currentDate.clone().endOf('month');
    const startOfCalendar = startOfMonth.clone().startOf('week');
    const endOfCalendar = endOfMonth.clone().endOf('week');
    const today = moment();

    const days = [];
    let currentDay = startOfCalendar.clone();

    while (currentDay.isBefore(endOfCalendar)) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push({
          day: currentDay.date(),
          isCurrentMonth: currentDay.isSame(this.currentDate, 'month'),
          isToday: currentDay.isSame(today, 'day'),
          isSelected: this.selectedDay?.isSame(currentDay, 'day')
        });
        currentDay.add(1, 'day');
      }
      days.push(week);
    }

    return days;
  }

  @action
  selectDate(dayObj: { day: number; isCurrentMonth: boolean; isToday: boolean; isSelected: boolean }) {
    if (dayObj.isCurrentMonth) {
      this.selectedDay = this.currentDate.clone().date(dayObj.day);
    } else if (dayObj.day > 15) {
      this.previousMonth();
      this.selectedDay = this.currentDate.clone().endOf('month').date(dayObj.day);
    } else {
      this.nextMonth();
      this.selectedDay = this.currentDate.clone().startOf('month').date(dayObj.day);
    }

    console.log(this.selectedDay);
  }

  @action
  previousMonth() {
    this.currentDate = this.currentDate.clone().subtract(1, 'month');
    this.selectedDay = null;
  }

  @action
  nextMonth() {
    this.currentDate = this.currentDate.clone().add(1, 'month');
    this.selectedDay = null;
  }

  @action
  showMonthsView() {
    this.currentCalendarView = CalendarViewtype.months;
  }

  @action
  selectMonth(monthIndex: number) {
    this.currentDate = this.currentDate.clone().month(monthIndex);
    this.currentCalendarView = CalendarViewtype.month;
  }

  @action
  changeYear(event: Event) {
    console.log(event);
    const value = event as unknown as number;
    this.currentDate = this.currentDate.clone().year(value);
  }
}
