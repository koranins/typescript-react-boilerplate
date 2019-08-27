import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', (): void => {
  it('renders correctly', (): void => {
    const app = shallow(<App what="world" />);
    expect(app).toMatchSnapshot();
  });
});
