import { createAction } from "redux-actions";

export const FETCH_RECORDS = 'FETCH_RECORDS';
export const fetchRecords = createAction(FETCH_RECORDS);

export const FETCH_RECORDS_REQUESTED = 'FETCH_RECORDS_REQUESTED';
export const fetchRecordsRequested = createAction(FETCH_RECORDS_REQUESTED);

export const FETCH_RECORDS_FAILURE = 'FETCH_RECORDS_FAILURE';
export const fetchRecordsFailure = createAction(FETCH_RECORDS_FAILURE);

export const FETCH_RECORDS_SUCCESS = 'FETCH_RECORDS_SUCCESS';
export const fetchRecordsSuccess = createAction(FETCH_RECORDS_SUCCESS);