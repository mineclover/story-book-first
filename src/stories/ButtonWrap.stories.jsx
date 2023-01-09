import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import ButtonWrap from './ButtonWrap';

export default {
  title: 'Example/ButtonWrap',
  component: ButtonWrap,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

let list = ['이름', '나이', '성별', '직업'];
export const Primary = () => <ButtonWrap data={list} />;
