/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  notificationState: false,
};

export const settingsReducer = createReducer(initialState, {
  [types.NOTIFICATION_STATE](state,action) {
    return { ...state, notificationState: action.data };
  },
 
});
