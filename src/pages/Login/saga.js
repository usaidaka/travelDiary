import { setLoading } from '@containers/App/actions';
import { login } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setLogin, setToken } from '@containers/Client/actions';

import { POST_LOGIN } from './constants';

function* doLogin({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const { data } = yield call(login, dataUser);
    yield put(setLogin(true));
    yield put(setToken(data.token));

    cbSuccess && cbSuccess();
  } catch (error) {
    cbFailed(error.response?.data?.message);
  }
  yield put(setLoading(false));
}

export default function* loginSaga() {
  yield takeLatest(POST_LOGIN, doLogin);
}
