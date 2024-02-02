import { Meta, StoryObj } from "@storybook/react";

import DayButton from "./DayButton";

const meta: Meta<typeof DayButton> = {
  title: "DayButton",
  component: DayButton,
  args: {
    date: new Date(),
  },
  argTypes: {
    // color: {
    //   control: "select",
    //   options: ["default", "disabled", "hover", "selected", "midInterval", "edgeInterval"],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof DayButton>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
