import { produce } from 'immer';
import { SET_MY_POST } from './constants';

export const initialState = {
  postData: [],
};

export const storedProfileKey = [''];

const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MY_POST:
        draft.postData = action.postData;
        break;
    }
  });

export default profileReducer;
