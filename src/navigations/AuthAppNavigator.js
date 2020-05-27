import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthAppNavigatorNavigator = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
});

export default AuthAppNavigatorNavigator;
