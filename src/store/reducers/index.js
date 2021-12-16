import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';
import app from './app';
import user from './user';

const config = {
  blacklist: ['app'],
  key: 'primary',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(config, {
  app,
  user,
});

export default reducers;
