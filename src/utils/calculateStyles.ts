/* eslint-disable no-nested-ternary */
import { DefaultTheme } from "styled-components";

import { RangeType } from "./calculateRange";

const colorWhite = ({ theme }: DefaultTheme) => theme.color.white;
const colorBgSelectedDay = ({ theme }: DefaultTheme): string => theme.color.daySelected;
const colorBgRangeEdge = ({ theme }: DefaultTheme): string => theme.color.dayIntervalEdge;
const colorBgRangeMid = ({ theme }: DefaultTheme): string => theme.color.dayIntervalMid;

const colorTextSecondary = ({ theme }: DefaultTheme): string => theme.color.textSecondary;
const colorTextWeekend = ({ theme }: DefaultTheme): string => theme.color.red;

const borderRadRangeStart = ({ theme }: DefaultTheme): string => theme.border.radius.dayRangeStart;
const borderRadRangeEnd = ({ theme }: DefaultTheme): string => theme.border.radius.dayRangeEnd;
const borderRadRangeMid = ({ theme }: DefaultTheme): string => theme.border.radius.dayRangeMid;
const borderRadPrimary = ({ theme }: DefaultTheme): string => theme.border.radius.primary;

export function getDayBgColor(isSelected: boolean);
export function getDayBgColor(rangeType: RangeType);
export function getDayBgColor(rangeOrSelected: boolean | RangeType) {
  if (!rangeOrSelected) return colorWhite;
  if (typeof rangeOrSelected === "boolean") {
    return rangeOrSelected ? colorBgSelectedDay : colorWhite;
  }
  switch (rangeOrSelected) {
    case "start":
      return colorBgRangeEdge;
    case "end":
      return colorBgSelectedDay;
    case "middle":
      return colorBgRangeMid;
    default:
      return colorWhite;
  }
}

export function getDayBorderRadius(rangeType: RangeType) {
  switch (rangeType) {
    case "start":
      return borderRadRangeStart;
    case "end":
      return borderRadRangeEnd;
    case "middle":
      return borderRadRangeMid;
    default:
      return borderRadPrimary;
  }
}

export function getTextColor(isSelected: boolean, isWeekend: boolean);
export function getTextColor(rangeType: RangeType, isWeekend: boolean);
export function getTextColor(rangeOrSelected: boolean | RangeType, isWeekend: boolean) {
  if (!rangeOrSelected) return isWeekend ? colorTextWeekend : colorTextSecondary;
  if (typeof rangeOrSelected === "boolean") {
    return rangeOrSelected ? colorWhite : isWeekend ? colorTextWeekend : colorTextSecondary;
  }
  switch (rangeOrSelected) {
    case "start":
    case "end":
      return colorWhite;
    case "middle":
      return isWeekend ? colorTextWeekend : colorBgSelectedDay;
    default:
      return isWeekend ? colorTextWeekend : colorTextSecondary;
  }
}
