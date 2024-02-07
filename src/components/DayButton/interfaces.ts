export interface IDayProps {
  date: Date;
  isDisabled?: boolean;
  isSelected?: boolean;
}

export interface IDayStyledProps {
  isToday: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  isWeekend?: boolean;
}
