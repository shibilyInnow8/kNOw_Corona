/*
 * Reducer actions related with login
 */
import * as types from './types';


export function setNotificationState(data) {
  return {
    type: types.NOTIFICATION_STATE,
    data
  };
}