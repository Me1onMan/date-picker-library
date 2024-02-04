import { Meta, StoryObj } from "@storybook/react";

import DateInput from "./DateInput";

const meta: Meta<typeof DateInput> = {
  title: "DateInput",
  component: DateInput,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
