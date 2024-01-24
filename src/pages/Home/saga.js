import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';
import { allPost } from '@domain/api';
import { setAllPost } from './actions';
import { GET_ALL_POST } from './constants';

function* getAllPost() {
  yield put(setLoading(true));
  try {
    const res = yield call(allPost);

    yield put(setAllPost(res?.data));
  } catch (error) {
    console.error(error);
    yield put(showPopup('Error', error.message));
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_ALL_POST, getAllPost);
}
