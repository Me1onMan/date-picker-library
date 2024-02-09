import { Meta, StoryObj } from "@storybook/react";

import Decorator from "../../decorators/Decorator";
import withSundayFirst from "../../decorators/withSundayFirst";

import RangePicker from "./RangePicker";

const calendar = new Decorator();
const DefaultCalendar = calendar.getCalendar();
calendar.addDecorator(withSundayFirst);
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
