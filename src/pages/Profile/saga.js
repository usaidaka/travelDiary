import { setLoading, showPopup } from '@containers/App/actions';
import { myPost } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_MY_POST } from './constants';
import { setMyPost } from './actions';

function* getMyPostDatas() {
  yield put(setLoading(true));
  try {
    const res = yield call(myPost);
    yield put(setMyPost(res?.data));
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

export default function* profileSaga() {
  yield takeLatest(GET_MY_POST, getMyPostDatas);
}
