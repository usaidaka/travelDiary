import { CREATE_POST } from './constants';

export const createPost = (postData, cbSuccess, cbFailed) => ({
  type: CREATE_POST,
  postData,
  cbSuccess,
  cbFailed,
});
