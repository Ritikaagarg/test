import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './root-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home';
import {View, Image, TouchableOpacity} from 'react-native';

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
    <Drawer.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  source={require('../assets/about.png')}
                  style={{height: 50, width: 50}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  source={require('../assets/about.png')}
                  style={{height: 50, width: 50}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  source={require('../assets/about.png')}
                  style={{height: 50, width: 50}}
                />
              </TouchableOpacity>
            </View>
          );
        },
      }}>
      <Drawer.Screen name="HomeStack" component={AppStackScreens} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
