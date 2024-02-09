import { Meta, StoryObj } from "@storybook/react";

import ClearIntervalButton from "./ClearIntervalButton";

const meta: Meta<typeof ClearIntervalButton> = {
  title: "ClearIntervalButton",
  component: ClearIntervalButton,
  args: {
    text: "Add task",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ClearIntervalButton>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
