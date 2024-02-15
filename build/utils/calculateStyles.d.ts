import { RangeType } from "./calculateRange";
export declare function getDayBgColor(isSelected: boolean): any;
export declare function getDayBgColor(rangeType: RangeType): any;
export declare function getDayBorderRadius(rangeType: RangeType): "8px" | "8px 0 0 8px" | "0 8px 8px 0" | "0";
export declare function getTextColor(isSelected: boolean, isWeekend: boolean): any;
export declare function getTextColor(rangeType: RangeType, isWeekend: boolean): any;
export declare const getHoverBgColor: (isSelected: boolean, rangeType: RangeType) => any;
