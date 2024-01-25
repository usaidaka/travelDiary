import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBookmarkState = (state) => state.bookmark || initialState;

export const selectAllBookmark = createSelector(selectBookmarkState, (state) => state.bookmarkData);
