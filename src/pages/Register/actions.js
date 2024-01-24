import { POST_REGISTER } from './constants';

export const postRegister = (dataUser, cbSuccess, cbFailed) => ({
  type: POST_REGISTER,
  dataUser,
  cbSuccess,
  cbFailed,
});
