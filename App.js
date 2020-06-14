import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigations';
import Store from './src/redux/store';

export default function App() {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
}
