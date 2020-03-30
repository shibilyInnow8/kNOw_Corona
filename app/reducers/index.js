/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as homeReducer from './homeReducer';
import * as settingsReducer from './settingsReducer';
export default Object.assign(homeReducer, loadingReducer,settingsReducer);
