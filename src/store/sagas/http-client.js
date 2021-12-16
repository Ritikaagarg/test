import { call, delay } from 'redux-saga/effects';
import Idx from 'idx';
import Toast from 'react-native-toast-message';
import axiosInstance from '../../resources/axios-instance';

function* HttpClient(payload) {
  
  const data = { ...payload };

  try {
    const { data: result } = yield call(axiosInstance, data);

    return {
      error: null,
      result,
    };
  } catch (error) {
    if (Idx(error, _ => _.code)) {
      if (error.code === 'ECONNABORTED') {
        const message = "Servers are down, please try again later.";
        Toast.show({
          text1: message,
        });
      } else if (error.code === 401) {
        yield delay(250);
        Toast.show({
          text1: error.message,
        });
      } else if (error.code === 402) {
        // show nothing
      } else {
        Toast.show({
          text1: error.message,
        });
      }
    } else {
      Toast.show({
        text1: error.message,
      });
    }

    return {
      error,
      result: null,
    };
  }
}

export default HttpClient;
