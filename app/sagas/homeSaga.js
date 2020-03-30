
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import { getGlobalDetails,getCountryDetails }from '../api/methods/homeAPI';
import { putGlobalDetails,enableLoader,putCountryDetails } from '../actions/homeActions';
import * as navigationActions from 'app/actions/navigationActions';

export default function* homeGlobalAsync() {
  //how to call api
  yield put(enableLoader());
  const response = yield call(getGlobalDetails);
  yield put(putGlobalDetails(response.results));
  // alert(JSON.stringify(response))
  //mock response
  // const response = { success: true, data: { id: 1 } };

  // if (response.success) {

  //   yield put(loginActions.disableLoader({}));
  //   yield call(navigationActions.navigateToHome);
  // } else {
  //   yield put(loginActions.loginFailed());
  //   yield put(loginActions.disableLoader({}));
  //   setTimeout(() => {
  //     Alert.alert('BoilerPlate', response.Message);
  //   }, 200);
  // }
}
