import { Meta, StoryObj } from "@storybook/react";

import Weekdays from "./Weekdays";

const meta: Meta<typeof Weekdays> = {
  title: "Weekdays",
  component: Weekdays,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Weekdays>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
