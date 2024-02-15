import { HOLIDAYS } from "@constants/holidays";

import { isMonthAndDayEqual } from "./compareDates";

const isHoliday = (day: Date): boolean => {
  return (
    HOLIDAYS.filter((holidayDate) => {
      return isMonthAndDayEqual(day, holidayDate.date);
    }).length > 0
  );
};

export default isHoliday;
