import { Meta, StoryObj } from "@storybook/react";

import DaysGridContainer from "./DaysGridContainer";

const meta: Meta<typeof DaysGridContainer> = {
  title: "DaysGridContainer",
  component: DaysGridContainer,
  args: {
    year: 2024,
    month: 1,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DaysGridContainer>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
