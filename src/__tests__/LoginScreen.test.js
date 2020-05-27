import React from 'react';
import { render } from 'react-native-testing-library';
import LoginScreen from '../screens/LoginScreen';

describe('Login Screen tests', () => {
  it('Should render login component properly', () => {
    expect(<LoginScreen />).toMatchSnapshot();
  });
});
