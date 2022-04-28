import {Provider} from 'react-redux';
import React, {useState} from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import configureStore from './store';
import Navigator from './navigation';

const {store, persistor} = configureStore();
LogBox.ignoreAllLogs();

const Src = () => {
  React.useEffect(() => {
    // Hide the splash screen
    const hideSplashScreen = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    return () => {
      clearTimeout(hideSplashScreen);
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
          <Toast type="error" position="bottom" bottomOffset={20} />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default Src;
