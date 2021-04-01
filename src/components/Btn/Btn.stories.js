import React from 'react';
import Button from './Btn';

export default {
  title: 'controlled btn',
  component: Button,
};

const Btn = (args) => <Button {...args} />;

export const Primary = Btn.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Btn.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Btn.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Btn.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
