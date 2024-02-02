import { Meta, StoryObj } from "@storybook/react";

import DaysGridContainer from "./DaysGridContainer";

const meta: Meta<typeof DaysGridContainer> = {
  title: "DaysGridContainer",
  component: DaysGridContainer,
  args: {},
  argTypes: {
    // color: {
    //   control: "select",
    //   options: ["default", "disabled", "hover", "selected", "midInterval", "edgeInterval"],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof DaysGridContainer>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
