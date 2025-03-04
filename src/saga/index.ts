import { all, fork } from 'redux-saga/effects';
import userSaga from './users';

export default function* root() {
	yield all([fork(userSaga)]);
}