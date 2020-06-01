import React from 'react';
import { render } from 'react-native-testing-library';
import SignUpScreen from '../screens/SignUpScreen';

describe('SignUp Screen tests', () => {
  it('Should render SignUp component properly', () => {
    expect(<SignUpScreen />).toMatchSnapshot();
  });
});
