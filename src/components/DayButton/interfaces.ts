export interface IDayProps {
  date: Date;
  isDisabled?: boolean;
  isWithWeekends?: boolean;
}

export interface IDayStyledProps {
  $isToday: boolean;
  $isDisabled?: boolean;
  $isSelected?: boolean;
  $isWeekend?: boolean;
}
