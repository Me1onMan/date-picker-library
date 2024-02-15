export type RangeType = "start" | "middle" | "end";
export declare const isDateInRange: (date: Date, minDate: Date, maxDate: Date) => boolean;
export declare const getRangeType: (day: Date, startDate: Date, endDate: Date) => RangeType;
