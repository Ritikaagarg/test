import { all, call, put, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-toast-message';
import httpClient from './http-client';
import { navigate } from '../../navigation/root-navigation';
import { fetchRecordsFailure, fetchRecordsRequested, fetchRecordsSuccess, FETCH_RECORDS } from '../actions/user-action-types';

function* fetchRecords({ payload: {query, callback} }) {
  yield put(fetchRecordsRequested());
  const payload = {
    method: 'get',
    url: `search?term=${query}`
  }
  const { error, result } = yield call(httpClient, payload);
  if(error){
    console.log("error: ", error);
    if (error.code === 402) {
      const errorDetail = {
        code: error.code,
        ...JSON.parse(error.message),
      };

    Toast.show({ text1: errorDetail.message });
    yield put(fetchRecordsFailure(errorDetail));
    } else {
      yield put(fetchRecordsFailure(null));
    }
  }else {
    yield put(fetchRecordsSuccess(result.results))
    console.log(result.results)
    if(callback){
      callback(result.results);
    }
  }
}

function* User() {
  yield all([
    takeLatest(FETCH_RECORDS, fetchRecords),
  ]);
}

export default User;
