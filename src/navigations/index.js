import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthAppNavigator from './AuthAppNavigator';

const AppNavigator = createSwitchNavigator({
  Auth: AuthAppNavigator,
});

export default createAppContainer(AppNavigator);
