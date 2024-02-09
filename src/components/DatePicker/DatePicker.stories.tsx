import { Meta, StoryObj } from "@storybook/react";

import Decorator from "../../decorators/Decorator";
import withSundayFirst from "../../decorators/withSundayFirst";
import withTodos from "../../decorators/withTodos";
import withWeekends from "../../decorators/withWeekends";

import DatePicker from "./DatePicker";

const calendar = new Decorator();
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
