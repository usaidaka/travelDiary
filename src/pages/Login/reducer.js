import { produce } from 'immer';

import { POST_LOGIN } from './constants';

export const initialState = {
  userData: {},
};

export const storedLoginState = ['login'];

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case POST_LOGIN:
        draft.userData = action.userData;
        break;
    }
  });

export default loginReducer;
