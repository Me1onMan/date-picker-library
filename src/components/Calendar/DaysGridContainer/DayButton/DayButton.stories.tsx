import { Meta, StoryObj } from "@storybook/react";

import DayButton from "./DayButton";

const meta: Meta<typeof DayButton> = {
  title: "DayButton",
  component: DayButton,
  args: {
    date: new Date(2024, 1, 5),
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DayButton>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
