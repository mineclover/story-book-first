import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import OptionBox from './OptionBox';

export default {
  title: 'Example/OptionBox',
  component: OptionBox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = () => <OptionBox name="이름" />;
