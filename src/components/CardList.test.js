import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
	const robots = [
		{
			id: 1,
			name: 'John',
			username: 'JohnJohn',
			email: 'john@gmail.com'
		}
	]
	expect(shallow(<CardList robots={robots} />)).toMatchSnapshot();
})