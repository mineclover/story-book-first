import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { SearchBar } from './SearchBar';

export default {
	title: 'Example/SearchBar',
	component: SearchBar,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

export const Primary = () => <SearchBar />;
