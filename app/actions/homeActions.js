/*
 * Reducer actions related with login
 */
import * as types from './types';

export function getGlobalDetails(username, password) {
  return {
    type: types.HOME_GLOBAL,
  };
}
export function setCountryDetails(data) {
  return {
    type: types.SET_COUNTRY_DETAILS,
    data
  };
}
export function enableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}
export function disableLoader() {
  return {
    type: types.DISABLE_LOADER,
  };
}
export function putGlobalDetails(data) {
  return {
    type: types.PUT_HOME_GLOBAL,
    data
  };
}
export function getCountryDetails(data) {
  return {
    type: types.GET_COUNTRY_DETAILS,
    data
  };
}
export function getCountryNews(data) {
  return {
    type: types.GET_COUNTRY_NEWS,
    data
  };
}
export function putCountryNews(data) {
  return {
    type: types.SET_COUNTRY_NEWS,
    data
  };
}
export function getCountryTimeline(data) {
  return {
    type: types.GET_COUNTRY_TIMELINE,
    data
  };
}
export function putCountryTimeline(data) {
  return {
    type: types.SET_COUNTRY_TIMELINE,
    data
  };
}
export function putCountryDetails(data) {
  return {
    type: types.COUNTRY_DATA,
    data
  };
}