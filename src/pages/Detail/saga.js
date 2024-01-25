import { setLoading, showPopup } from '@containers/App/actions';
import { detailPost } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_POST_DETAIL } from './constants';
import { setPostDetail } from './actions';

function* getPostDetail({ id, cbNotFound }) {
  yield put(setLoading(true));
  try {
    const res = yield call(detailPost, id);
    console.log(id);
    yield put(setPostDetail(res?.data));
  } catch (error) {
    if (error?.response?.status === 404) {
      cbNotFound();
    } else {
      yield put(showPopup());
    }
  }
  yield put(setLoading(false));
}

export default function* detailSaga() {
  yield takeLatest(GET_POST_DETAIL, getPostDetail);
}
