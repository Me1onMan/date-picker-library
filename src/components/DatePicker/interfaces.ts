import { ComponentType } from "react";

export interface IDatePickerProps {
  CalendarView: ComponentType;
  minDate?: Date;
  maxDate?: Date;
}
