import { FC, ReactNode } from "react";
interface ICalendarContext {
    today: Date;
    selectedDay?: Date;
    selectedMonth: number;
    selectedYear: number;
    setSelectedDay: (_: Date) => void;
    setSelectedMonth: (_: number) => void;
    setSelectedYear: (_: number) => void;
}
interface ICalendarProviderProps {
    children: ReactNode;
}
export declare const useCalendar: () => ICalendarContext;
declare const CalendarProvider: FC<ICalendarProviderProps>;
export default CalendarProvider;
