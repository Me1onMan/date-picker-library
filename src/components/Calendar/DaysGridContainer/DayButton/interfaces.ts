export interface IDayProps {
  date: Date;
  isDisabled?: boolean;
}

export interface IDayStyledProps {
  isToday: boolean;
  isDisabled?: boolean;
  isWeekend?: boolean;
}
