import {
  FETCH_RECORDS_REQUESTED,
  FETCH_RECORDS_FAILURE,
  FETCH_RECORDS_SUCCESS
} from '../actions/user-action-types';

const initialState = {
  recordsData : null,
  recordsError : null
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function user(state = initialState, { payload, type }) {
  switch (type) {
    case FETCH_RECORDS_REQUESTED:
      return {
        ...state,
        recordsError: '',
      };

    case FETCH_RECORDS_FAILURE:
      return {
        ...state,
        recordsError: payload,
      };

    case FETCH_RECORDS_SUCCESS:
      return {
        ...state,
        recordsError: null,
        recordsData: payload,
      };

    default:
      return state;
  }
}
