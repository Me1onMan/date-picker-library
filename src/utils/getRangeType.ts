import { isDaysEqual } from "./calculateDates";

export type RangeType = "start" | "middle" | "end";

export const getRangeType = (day: Date, startDate: Date, endDate: Date): RangeType => {
  if (!day) return undefined;

  if (!startDate) return undefined;
  if (isDaysEqual(day, startDate)) return "start";

  if (!endDate) return undefined;
  if (isDaysEqual(day, endDate)) return "end";

  if (day.getTime() >= startDate.getTime()) {
    if (endDate.getTime() >= day.getTime()) {
      return "middle";
    }
  }
  return undefined;
};
