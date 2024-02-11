export declare const getMissingPrevDays: (year: number, month: number, isSundayFirst: boolean) => Date[];
export declare const getMissingNextDays: (year: number, month: number, isSundayFirst: boolean) => Date[];
export declare const getDaysSelectedMonth: (year: number, month: number) => Date[];
export declare const checkWeekend: (date: Date) => boolean;
export declare const isDaysEqual: (date1: Date, date2: Date) => boolean;
export declare const isMonthAndDayEqual: (date1: Date, date2: Date) => boolean;
export declare const isFirstDateGreaterOrEqual: (date1: Date, date2: Date) => boolean;
export declare const isDateInRange: (date: Date, minDate: Date, maxDate: Date) => boolean;
