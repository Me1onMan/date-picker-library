import { Meta, StoryObj } from "@storybook/react";

import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "DatePicker",
  component: DatePicker,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
