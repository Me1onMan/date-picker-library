import { DefaultTheme } from "styled-components";
import { RangeType } from "./getRangeType";
export declare function getDayBgColor(isSelected: boolean): any;
export declare function getDayBgColor(rangeType: RangeType): any;
export declare function getDayBorderRadius(rangeType: RangeType): ({ theme }: DefaultTheme) => string;
export declare function getTextColor(isSelected: boolean, isWeekend: boolean): any;
export declare function getTextColor(rangeType: RangeType, isWeekend: boolean): any;
