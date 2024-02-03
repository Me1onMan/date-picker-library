import { Meta, StoryObj } from "@storybook/react";

import Calendar from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Calendar",
  component: Calendar,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
