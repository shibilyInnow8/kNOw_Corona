/**
 *  Redux saga class init
 */
import { takeEvery, all,takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import homeSaga from './homeSaga';
import countryDetailsSaga from './countryDetailsSaga';
import countryNewsSaga from './countryNewsSaga';
import countryTimelineSaga from './countryTimelineSaga';

export default function* watch() {
  yield all([takeEvery(types.HOME_GLOBAL, homeSaga)]);
  yield all([takeEvery(types.GET_COUNTRY_DETAILS, countryDetailsSaga)]);
  yield all([takeEvery(types.GET_COUNTRY_NEWS, countryNewsSaga)]);
  yield all([takeEvery(types.GET_COUNTRY_TIMELINE, countryTimelineSaga)]);
  
}
