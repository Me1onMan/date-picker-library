import { RangeType } from "@utils/calculateRange";
export interface IDayProps {
    date: Date;
    isDisabled?: boolean;
    isWithWeekends?: boolean;
    isWithHolidays?: boolean;
}
export interface IDayStyledProps {
    $isToday: boolean;
    $isDisabled?: boolean;
    $isSelected?: boolean;
    $isWeekend?: boolean;
    $isHoliday?: boolean;
    $rangeType?: RangeType;
}
