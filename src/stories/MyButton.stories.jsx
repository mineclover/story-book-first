import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import Button from './MyButton';

export default {
	title: 'Example/MyButton',
	component: Button,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

export const Primary = () => <Button name="이름" />;
