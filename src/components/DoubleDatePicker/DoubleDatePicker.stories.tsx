import { Meta, StoryObj } from "@storybook/react";

import DoubleDatePicker from "./DoubleDatePicker";

const meta: Meta<typeof DoubleDatePicker> = {
  title: "DoubleDatePicker",
  component: DoubleDatePicker,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DoubleDatePicker>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
