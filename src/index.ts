import CalendarManager from "@decorators/CalendarManager";

export const calendar = new CalendarManager();
export { default as CalendarManager } from "@decorators/CalendarManager";
export { default as withHolidays } from "@decorators/withHolidays";
export { default as withSundayFirst } from "@decorators/withSundayFirst";
export { default as withTodos } from "@decorators/withTodos";
export { default as withWeekends } from "@decorators/withWeekends";
export { default as DatePicker } from "@components/DatePicker/DatePicker";
export { default as RangePicker } from "@components/RangePicker/RangePicker";
