/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  globalData:[],
  countryData:[],
  refreshing:false,
  countryDetails:{cca2: "IN", name:'India',currency: Array(1), callingCode: Array(1), region: "Asia", subregion: "Southern Asia",},
  countryNews:[],
  countryTimeline:[]
};

export const homeReducer = createReducer(initialState, {
 
  [types.PUT_HOME_GLOBAL](state, action) {
    return {
      ...state,
      globalData:action.data
    };
  },
  [types.COUNTRY_DATA](state, action) {
    return {
      ...state,
      countryData:action.data
    };
  },
  [types.ENABLE_LOADER](state, action) {
    return {
      ...state,
      refreshing:true
    };
  },
  [types.DISABLE_LOADER](state, action) {
    return {
      ...state,
      refreshing:false
    };
  },
  [types.SET_COUNTRY_DETAILS](state, action) {
    return {
      ...state,
      countryDetails:action.data
    };
  },
  [types.SET_COUNTRY_NEWS](state, action) {
    return {
      ...state,
      countryNews:action.data
    };
  },
  [types.SET_COUNTRY_TIMELINE](state, action) {
    return {
      ...state,
      countryTimeline:action.data
    };
  },
  
});
