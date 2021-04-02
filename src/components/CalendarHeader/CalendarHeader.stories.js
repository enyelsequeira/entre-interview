import React from 'react';
import CalendarHeader from './CalendarHeader';

export default {
  title: 'Calendar Header',
  component: CalendarHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Template = (args) => <CalendarHeader {...args} />;
