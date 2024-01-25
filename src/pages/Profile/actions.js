import { GET_MY_POST, GET_MY_PROFILE, SET_MY_POST, SET_MY_PROFILE } from './constants';

export const getMyPost = () => ({
  type: GET_MY_POST,
});
export const setMyPost = (postData) => ({
  type: SET_MY_POST,
  postData,
});

export const getMyProfile = () => ({
  type: GET_MY_PROFILE,
});

export const setMyProfile = (profileData) => ({
  type: SET_MY_PROFILE,
  profileData,
});
