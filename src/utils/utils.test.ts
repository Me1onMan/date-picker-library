import { describe, expect, it } from "@jest/globals";

import "@testing-library/jest-dom";

import { getRangeType } from "./getRangeType";
import isHoliday from "./isHoliday";

describe("isHoliday test", () => {
  it("should return true, if date is Holiday date", () => {
    const holidayDate = new Date(2024, 1, 23);
    const noHolidayDate = new Date(2024, 1, 4);

    expect(isHoliday(holidayDate)).toEqual(true);
    expect(isHoliday(noHolidayDate)).toEqual(false);
  });
});

describe("getRangeType test", () => {
  it("return start, middle, end or undifined", () => {
    const rangeStart = new Date(2024, 1, 10);
    const rangeEnd = new Date(2024, 1, 20);

    const startDate = new Date(2024, 1, 10);
    const endDate = new Date(2024, 1, 20);
    const midDate = new Date(2024, 1, 15);
    const outOfRangeDate = new Date(2024, 1, 26);

    expect(getRangeType(startDate, rangeStart, rangeEnd)).toEqual("start");
    expect(getRangeType(midDate, rangeStart, rangeEnd)).toEqual("middle");
    expect(getRangeType(endDate, rangeStart, rangeEnd)).toEqual("end");
    expect(getRangeType(outOfRangeDate, rangeStart, rangeEnd)).toEqual(undefined);
  });
});
