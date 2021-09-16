import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteStack from './route/routeStack';

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <RouteStack />
    </NavigationContainer>
  );
}

export default App;
