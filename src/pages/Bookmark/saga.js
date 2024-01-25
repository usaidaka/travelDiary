import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';
import { allBookmark, deleteBookmark } from '@domain/api';
import { setBookmark } from './actions';
import { DELETE_BOOKMARK, GET_BOOKMARK } from './constants';

function* getAllPost() {
  yield put(setLoading(true));
  try {
    const res = yield call(allBookmark);
    console.log(res, '<< RES');
    yield put(setBookmark(res?.data));
  } catch (error) {
    console.error(error);
    yield put(showPopup('Error', error.message));
  }
  yield put(setLoading(false));
}

function* doDeleteBookmark({ id, callback }) {
  yield put(setLoading(true));

  try {
    yield call(deleteBookmark, id);
    callback && callback();
  } catch (err) {
    yield put(showPopup('Error', err.message));
  }

  yield put(setLoading(false));
}

export default function* bookmarkSaga() {
  yield takeLatest(GET_BOOKMARK, getAllPost);
  yield takeLatest(DELETE_BOOKMARK, doDeleteBookmark);
}
