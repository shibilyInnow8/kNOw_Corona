
import { put, call, select,take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import { getCountryTimeline }from '../api/methods/homeAPI';
import { disableLoader,putCountryTimeline,} from '../actions/homeActions';
import * as navigationActions from 'app/actions/navigationActions';

export default function* countryDetailsAsync(action) {
  //how to call api
  const response = yield call(getCountryTimeline,action.data.cca2);
  if(response.results&&response.results[0].data==='none'){
    //   setTimeout(() => {
    //   alert(`This country haven't officially reported any cases yet`);
    // }, 200);
    let newData={
      timelineitems:[]
    }
    yield put(putCountryTimeline(newData));
  }
  else if ( Object.keys(response.timelineitems[0]).length>=5){

  yield put(putCountryTimeline(response.timelineitems));
  }
  else{
    let newData={
      timelineitems:[]
    }
    yield put(putCountryTimeline(newData));
  }
  // console.log('response', Object.keys(response.timelineitems[0]).length)
  yield put(disableLoader());

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
