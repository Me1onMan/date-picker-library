import { Meta, StoryObj } from "@storybook/react";

import CalendarManager from "../../decorators/CalendarManager";
import withHolidays from "../../decorators/withHolidays";
import withSundayFirst from "../../decorators/withSundayFirst";
import withTodos from "../../decorators/withTodos";
import withWeekends from "../../decorators/withWeekends";

import DatePicker from "./DatePicker";

const calendar = new CalendarManager();
calendar.addDecorator(withHolidays);
const DefaultCalendar = calendar.getCalendar();
calendar.addDecorator(withTodos);
calendar.addDecorator(withSundayFirst);
calendar.addDecorator(withWeekends);
const TodoCalendar = calendar.getCalendar();

const meta: Meta<typeof DatePicker> = {
  title: "DatePicker",
  component: DatePicker,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    ...meta.args,
    CalendarView: DefaultCalendar,
  },
};

export const withTodo: Story = {
  args: {
    ...meta.args,
    CalendarView: TodoCalendar,
  },
};

export const withLimits: Story = {
  args: {
    ...meta.args,
    CalendarView: DefaultCalendar,
    minDate: new Date(2024, 1, 10),
    maxDate: new Date(2024, 1, 20),
  },
};
