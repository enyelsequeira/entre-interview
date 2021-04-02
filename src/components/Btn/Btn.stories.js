import React from 'react';
import Button from './Btn';

export default {
  title: 'Btn',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  text: 'Cancel',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Done',
};
