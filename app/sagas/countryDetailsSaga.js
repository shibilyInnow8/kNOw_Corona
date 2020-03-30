
import { put, call, select,take } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import { getCountryDetails }from '../api/methods/homeAPI';
import { disableLoader,putCountryDetails,setCountryDetails } from '../actions/homeActions';
import * as navigationActions from 'app/actions/navigationActions';

export default function* countryDetailsAsync(action) {
  //how to call api
  const response = yield call(getCountryDetails,action.data.cca2);
  yield put(setCountryDetails(action.data));
  if(response.results&&response.results[0].data==='none'){
      setTimeout(() => {
        Alert.alert(
          'Sorry',
          `We don't have any data of this country`,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
    }, 200);
    let newData={
      countrydata:[]
    }
    yield put(putCountryDetails(newData));
  }
  else{
  // console.log('response',response)
  yield put(putCountryDetails(response.countrydata));
  }

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
