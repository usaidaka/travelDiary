import { setLoading } from '@containers/App/actions';
import { createPost } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';

import { CREATE_POST } from './constants';

function* doCreatePost({ postData, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(createPost, postData);

    cbSuccess && cbSuccess();
  } catch (error) {
    cbFailed(error.response?.data?.message);
  }
  yield put(setLoading(false));
}

export default function* postSaga() {
  yield takeLatest(CREATE_POST, doCreatePost);
}
