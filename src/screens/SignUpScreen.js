
import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { signUpScreenStyles } from '../styles';

const { screen } = signUpScreenStyles;
const SignUpScreen = (props) => (
  <View style={screen}>
    <Text>Some dummy text here! stands for SignUp page</Text>
    <Button
      title="Go back to Login page"
      onPress={() => {
        props.navigation.pop();
      }}
    />
  </View>
);

export default SignUpScreen;


SignUpScreen.propTypes = {
  navigation: PropTypes.object,
};
