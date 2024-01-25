import { produce } from 'immer';
import { SET_MY_POST, SET_MY_PROFILE } from './constants';

export const initialState = {
  postData: [],
  profileData: {},
};

export const storedProfileKey = ['profileData'];

const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MY_POST:
        draft.postData = action.postData;
        break;
      case SET_MY_PROFILE:
        draft.profileData = action.profileData;
        break;
    }
  });

export default profileReducer;
