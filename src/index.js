import React from 'react';
import { StatusBar } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}