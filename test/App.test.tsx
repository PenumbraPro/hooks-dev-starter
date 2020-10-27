import React from 'react';
import { mount } from 'enzyme';
import App from '../src/App';

describe('App Test Suites', () => {
  it('should render App', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('p').text()).toBe('Hook Dev Starter');
  });
});
