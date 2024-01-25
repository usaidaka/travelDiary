import { DELETE_BOOKMARK, GET_BOOKMARK, SET_BOOKMARK } from './constants';

export const getBookmark = () => ({
  type: GET_BOOKMARK,
});

export const setBookmark = (bookmarkData) => ({
  type: SET_BOOKMARK,
  bookmarkData,
});

export const deleteBookmarkRequest = (id, callback) => ({
  type: DELETE_BOOKMARK,
  id,
  callback,
});
