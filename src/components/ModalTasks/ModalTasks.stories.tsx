import { Meta, StoryObj } from "@storybook/react";

import ModalTasks from "./ModalTasks";

const meta: Meta<typeof ModalTasks> = {
  title: "ModalTasks",
  component: ModalTasks,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ModalTasks>;

export const Primary: Story = {
  args: {
    ...meta.args,
  },
};
