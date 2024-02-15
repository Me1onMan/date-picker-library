import CalendarManager from "@decorators/CalendarManager";
import withSundayFirst from "@decorators/withSundayFirst";
import withWeekends from "@decorators/withWeekends";
import { Meta, StoryObj } from "@storybook/react";

import RangePicker from "./RangePicker";

const calendar = new CalendarManager();
const DefaultCalendar = calendar.getCalendar();
calendar.addDecorator(withSundayFirst);
calendar.addDecorator(withWeekends);
const AmericanCalendar = calendar.getCalendar();

const meta: Meta<typeof RangePicker> = {
  title: "RangePicker",
  component: RangePicker,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof RangePicker>;

export const Primary: Story = {
  args: {
    ...meta.args,
    CalendarView: DefaultCalendar,
  },
};

export const American: Story = {
  args: {
    ...meta.args,
    CalendarView: AmericanCalendar,
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
