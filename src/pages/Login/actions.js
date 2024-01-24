import { POST_LOGIN } from './constants';

export const postLogin = (dataUser, cbSuccess, cbFailed) => ({
  type: POST_LOGIN,
  dataUser,
  cbSuccess,
  cbFailed,
});
