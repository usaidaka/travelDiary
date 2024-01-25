import { ADD_BOOKMARK, GET_ALL_POST, SET_ALL_POST } from './constants';

export const getAllPost = () => ({
  type: GET_ALL_POST,
});
export const setAllPost = (postData) => ({
  type: SET_ALL_POST,
  postData,
});

export const addBookmark = (postId, callback) => ({
  type: ADD_BOOKMARK,
  postId,
  callback,
});
