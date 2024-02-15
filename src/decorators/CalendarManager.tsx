import { FC } from "react";
import Calendar from "@components/Calendar/Calendar";
import { ICalendarProps } from "@components/Calendar/interfaces";

class CalendarManager {
  private calendar: FC<ICalendarProps>;

  constructor() {
    this.calendar = Calendar;
  }

  public addDecorator(decorator: (calendar: FC<ICalendarProps>) => FC<ICalendarProps>) {
    this.calendar = decorator(this.calendar);
  }

  public getCalendar(): FC<ICalendarProps> {
    return this.calendar;
  }
}

export default CalendarManager;
