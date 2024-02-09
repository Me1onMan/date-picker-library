import { RangeType } from "@utils/getRangeType";

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
  $rangeType?: RangeType;
}
