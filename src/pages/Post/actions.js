import { CREATE_POST } from './constants';

export const createPost = (postData, callback) => ({
  type: CREATE_POST,
  postData,
  callback,
});
