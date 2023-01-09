import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import TagButton from './TagButton';

export default {
  title: 'Example/TagButton',
  component: TagButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = () => <TagButton name="이름" />;
