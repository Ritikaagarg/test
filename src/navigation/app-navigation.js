import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './root-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={AppStackScreens} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
