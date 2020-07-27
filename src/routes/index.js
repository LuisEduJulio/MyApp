import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultContainer from './DefaultContainer';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen component={DefaultContainer} name='DefaultContainer' />
      </Stack.Navigator>
    </>
  );
}
