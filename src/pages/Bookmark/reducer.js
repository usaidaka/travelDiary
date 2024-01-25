import { produce } from 'immer';

import { SET_BOOKMARK } from './constants';

export const initialState = {
  bookmarkData: [],
};

export const storedBookmarkKey = ['bookmarkData'];

const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_BOOKMARK:
        console.log(action, '<< REDUCER');
        draft.bookmarkData = action.bookmarkData;
        break;
    }
  });

export default bookmarkReducer;
