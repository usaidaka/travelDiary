import { setLoading } from '@containers/App/actions';
import { createPost } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';

import { CREATE_POST } from './constants';

function* doCreatePost({ postData, callback }) {
  yield put(setLoading(true));
  try {
    yield call(createPost, postData);
    callback && callback();
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* postSaga() {
  yield takeLatest(CREATE_POST, doCreatePost);
}
