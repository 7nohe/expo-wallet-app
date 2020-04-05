import { all, fork } from 'redux-saga/effects';
import { watchGetTicketsRequestStart } from './ticket.sagas';

export const rootSaga = function* root() {
  yield all([fork(watchGetTicketsRequestStart)]);
};
