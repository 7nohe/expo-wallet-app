import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_TICKETS_REQUEST_START, GET_TICKETS_REQUEST_END } from '../store/ticket/types';
import { getTickets } from '../api'

export function* watchGetTicketsRequestStart() {
  yield takeEvery(
    GET_TICKETS_REQUEST_START,
    requestGetTickets
  );
}

function* requestGetTickets() {
  const tickets = yield call(getTickets);
  yield put({ type: GET_TICKETS_REQUEST_END, payload: tickets });
}