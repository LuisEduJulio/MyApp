import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from '../../components/Header';
import HomeScreen from '../../pages/HomeScreen';
import ComplaintScreen from '../../pages/ComplaintScreen';

const Stack = createStackNavigator();

function DefaultContainer() {
  return (
    <>
      <Header />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen component={HomeScreen} name='HomeScreen' />
        <Stack.Screen component={ComplaintScreen} name='ComplaintScreen' />
      </Stack.Navigator>
    </>
  );
}

export default DefaultContainer;