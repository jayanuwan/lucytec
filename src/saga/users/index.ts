import { call, put, takeLatest, select } from "redux-saga/effects";
import * as apis from "../../api/users";
import * as actions from "../../actions/users";

import { GET_USERS, ADD_USERS } from "../../actions/users";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getUsers() {
  try {
    const result: ResponseGenerator = yield call(apis.getUsers);
    yield put(actions.getUsers.success(result.data.users));
  } catch (error) {
    // able to config global error message here
    yield put(actions.getUsers.failure(error));
  }
}

function* addUsers(data: any) {
  try {
    // const result: ResponseGenerator = yield call(apis.addUsers);

    yield put(actions.addUsers.success(data.param));
  } catch (error) {
    yield put(actions.addUsers.failure(error));
  }
}

export default function* userSaga() {
  yield takeLatest(GET_USERS, getUsers);
  yield takeLatest(ADD_USERS, addUsers);
}
