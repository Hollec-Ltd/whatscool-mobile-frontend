import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { loginScreenStyles } from '../styles';

const { screen } = loginScreenStyles;
const LoginScreen = (props) => (
  <View style={screen}>
    <Text>Some dummy text here! stands for Login page</Text>
    <Button
      title="Go to SignUp page"
      onPress={() => {
        props.navigation.navigate('SignUp');
      }}
    />
  </View>
);

export default LoginScreen;

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};
