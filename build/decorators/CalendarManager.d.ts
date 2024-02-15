import { FC } from "react";
import { ICalendarProps } from "@components/Calendar/interfaces";
declare class CalendarManager {
    private calendar;
    constructor();
    addDecorator(decorator: (calendar: FC<ICalendarProps>) => FC<ICalendarProps>): void;
    getCalendar(): FC<ICalendarProps>;
}
export default CalendarManager;
