import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}
	wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders Mainpage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
	
	expect(wrapper.instance().filterRobots()).toEqual([]);
	
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{id:3, name: 'John', email:'john@email.com'}],
		searchField: 'john',
		isPending: false
	}

	const wrapper2 = shallow(<MainPage {...mockProps2} />)
	expect(wrapper2.instance().filterRobots()).toEqual([{id:3, name: 'John', email:'john@email.com'}]);

})

it('filters robots correctly2', () => {
	
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{id:3, name: 'John', email:'john@email.com'}],
		searchField: 'a',
		isPending: false
	}

	const wrapper3 = shallow(<MainPage {...mockProps3} />)
	expect(wrapper3.instance().filterRobots()).toEqual([]);

})
