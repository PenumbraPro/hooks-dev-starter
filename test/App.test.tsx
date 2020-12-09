import React from 'react';
import { mount } from 'enzyme';
import App from '../src/App';

describe('<App /> Test', () => {
  it('should render App', () => {
    const Wrapper = mount(<App />);
    expect(Wrapper.find('h1').text()).toBe('Count: 0');
    expect(Wrapper.find('button').length).toBe(2);
    expect(Wrapper.find('button').at(0).text()).toBe('+');
    expect(Wrapper.find('button').at(1).text()).toBe('-');
  });

  it('useCounter should work correctly', () => {
    const Wrapper = mount(<App />);
    Wrapper.find('button').at(0).simulate('click');
    Wrapper.find('button').at(0).simulate('click');
    Wrapper.find('button').at(0).simulate('click');
    expect(Wrapper.find('h1').text()).toBe('Count: 3');

    Wrapper.find('button').at(1).simulate('click');
    Wrapper.find('button').at(1).simulate('click');
    Wrapper.find('button').at(1).simulate('click');
    expect(Wrapper.find('h1').text()).toBe('Count: 0');
  });
});
