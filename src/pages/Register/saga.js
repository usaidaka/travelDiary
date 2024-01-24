import { setLoading } from '@containers/App/actions';
import { register } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';

import { POST_REGISTER } from './constants';

function* doRegister({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(register, dataUser);
    cbSuccess && cbSuccess();
  } catch (error) {
    cbFailed(error.response?.data?.message);
  }
  yield put(setLoading(false));
}

export default function* registerSaga() {
  yield takeLatest(POST_REGISTER, doRegister);
}
