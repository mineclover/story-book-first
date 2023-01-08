import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import MySelectBox from './MySelectBox';

export default {
	title: 'Example/MySelectBox',
	component: MySelectBox,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

let list = ['이름', '나이', '성별', '직업'];
export const Primary = () => <MySelectBox data={list} />;
