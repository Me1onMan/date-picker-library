import { Meta, StoryObj } from "@storybook/react";

import ClearIntervalButton from "./ClearIntervalButton";

const meta: Meta<typeof ClearIntervalButton> = {
  title: "ClearIntervalButton",
  component: ClearIntervalButton,
  args: {},
  argTypes: {
    // color: {
    //   control: "select",
    //   options: ["default", "disabled", "hover", "selected", "midInterval", "edgeInterval"],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof ClearIntervalButton>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
