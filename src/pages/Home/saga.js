import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';
import { allPost, createBookmark } from '@domain/api';
import { setAllPost } from './actions';
import { ADD_BOOKMARK, GET_ALL_POST } from './constants';

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

function* addBookmark({ postId, callback }) {
  yield put(setLoading(true));
  try {
    const res = yield call(createBookmark, postId);
    console.log(res);
    callback && callback();
  } catch (error) {
    console.error(error);
    yield put(showPopup('Error', error.message));
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_ALL_POST, getAllPost);
  yield takeLatest(ADD_BOOKMARK, addBookmark);
}
