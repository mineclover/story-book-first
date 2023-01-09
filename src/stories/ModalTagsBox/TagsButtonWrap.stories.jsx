import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import TagsButtonWrap from './TagsButtonWrap';

export default {
  title: 'Example/TagsButtonWrap',
  component: TagsButtonWrap,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

let list = ['이름', '나이', '성별', '직업', '날씨'];
export const Primary = () => <TagsButtonWrap data={list} />;
