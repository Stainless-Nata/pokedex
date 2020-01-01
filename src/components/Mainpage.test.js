import { shallow, mount, render } from 'enzyme';
import React from 'react';          //need to import react to use JSX in the shallow
import MainPage from './MainPage/MainPage';

let wrapper, wrapper2, wrapper3, wrapper4;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />);
})

it('renders the mainpage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);          //check if filtering of a empty robots array with a empty searchfield will return an empty array

    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'John',
        isPending: false
    }
    wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([{                   //check if filtering the robots array will return the array we searched for
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
})

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = [];
    wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})

it('returns isPending correctly', () => {
    const mockProps4 = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: true
    }
    wrapper4 = render(<MainPage {...mockProps4} />);
    expect(wrapper4).toMatchSnapshot();
})