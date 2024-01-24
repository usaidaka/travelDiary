import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  // ping: 'ping.json',
  register: 'user/register',
  login: 'user/login',
  getProfile: 'user/get-profile',
  updateProfile: 'user/update/profile',

  createPost: 'post/create',
  myPost: 'post/my-post',
  allPost: 'post',
  deletePost: 'post/remove/:id',
  detailPost: 'post/detail/:id',

  createBookmark: 'bookmark/create',
  allBookmark: 'bookmark',
  deleteBookmark: 'bookmark/remove/:id',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'GET');

// AUTH
export const register = (dataUser) => callAPI(urls.register, 'POST', {}, {}, dataUser);
export const login = (dataUser) => callAPI(urls.login, 'POST', {}, {}, dataUser);
export const getProfile = () => callAPI(urls.getProfile, 'GET');

// POST
export const createPost = (postData) =>
  callAPI(urls.createPost, 'POST', { 'Content-Type': 'multipart/form-data; charset=UTF-8' }, {}, postData);
export const myPost = () => callAPI(urls.myPost, 'GET');
export const allPost = () => callAPI(urls.allPost, 'GET');
export const deletePost = (id) => callAPI(`${urls.deletePost}/${id}`, 'DELETE');
export const detailPost = (id) => callAPI(`${urls.detailPost}/${id}`, 'GET');

// BOOKMARK
export const createBookmark = (bookmarkData) => callAPI(urls.createBookmark, 'POST', {}, {}, bookmarkData);
export const allBookmark = () => callAPI(urls.allBookmark, 'GET');
export const deleteBookmark = (id) => callAPI(`${urls.deleteBookmark}/${id}`, 'DELETE');
