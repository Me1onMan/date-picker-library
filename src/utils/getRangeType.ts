import { isDaysEqual, isFirstDateGreaterOrEqual } from "./calculateDates";

export type RangeType = "start" | "middle" | "end";

export const getRangeType = (day: Date, startDate: Date, endDate: Date): RangeType => {
  if (!day || !startDate || !endDate) return undefined;

  if (isFirstDateGreaterOrEqual(day, startDate)) {
    if (isFirstDateGreaterOrEqual(endDate, day)) {
      if (isDaysEqual(day, startDate)) return "start";
      if (isDaysEqual(day, endDate)) return "end";
      return "middle";
    }
  }
  return undefined;
};
