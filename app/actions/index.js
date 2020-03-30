// export action creators
import * as homeActions from './homeActions';
import * as navigationActions from './navigationActions';
import * as settingsActions from './settingsActions';
export const ActionCreators = Object.assign(
  {},
  homeActions,
  navigationActions,
  settingsActions
);
