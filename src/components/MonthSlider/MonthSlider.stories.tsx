import { Meta, StoryObj } from "@storybook/react";

import MonthSlider from "./MonthSlider";

const meta: Meta<typeof MonthSlider> = {
  title: "MonthSlider",
  component: MonthSlider,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof MonthSlider>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
