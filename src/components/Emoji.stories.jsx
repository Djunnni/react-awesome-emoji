// src/components/Button.stories.js
import React from 'react';

import Emoji from './Emoji';

export default {
  title: 'Example/Emoji',
  component: Emoji,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Emoji {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'My Emoji',
};