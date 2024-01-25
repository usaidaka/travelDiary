import { setLoading, showPopup } from '@containers/App/actions';
import { getProfile, myPost } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_MY_POST, GET_MY_PROFILE } from './constants';
import { setMyPost, setMyProfile } from './actions';

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

function* getMyProfileDatas() {
  yield put(setLoading(true));
  try {
    const res = yield call(getProfile);
    yield put(setMyProfile(res?.data));
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

export default function* profileSaga() {
  yield takeLatest(GET_MY_POST, getMyPostDatas);
  yield takeLatest(GET_MY_PROFILE, getMyProfileDatas);
}
