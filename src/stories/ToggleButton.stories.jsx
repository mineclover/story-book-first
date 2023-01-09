import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import ToggleButton from './ToggleButton';

export default {
  title: 'Example/ToggleButton',
  component: ToggleButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = () => <ToggleButton name="이름" />;
