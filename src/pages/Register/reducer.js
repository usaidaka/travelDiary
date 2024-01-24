import { produce } from 'immer';

import { POST_REGISTER } from './constants';

export const initialState = {
  userData: {},
};

export const storedRegisterState = ['register'];

const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case POST_REGISTER:
        draft.userData = action.userData;
        break;
    }
  });

export default registerReducer;
