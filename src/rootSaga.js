import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';
import postSaga from '@pages/Post/saga';
import homeSaga from '@pages/Home/saga';
import profileSaga from '@pages/Profile/saga';

export default function* rootSaga() {
  yield all([appSaga(), homeSaga(), registerSaga(), loginSaga(), postSaga(), profileSaga()]);
}
