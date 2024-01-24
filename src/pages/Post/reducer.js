import { produce } from 'immer';

import { CREATE_POST } from './constants';

export const initialState = {
  postData: {},
};

export const storedPostState = [''];

const postReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_POST:
        draft.postData = action.postData;
        break;
    }
  });

export default postReducer;
