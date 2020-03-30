import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export  function getGlobalDetails() {
  return Api(
    ApiConstants.GLOBAL,
    null,
    'get',
    null,
  );
}
export function getCountryDetails(name) {
  return Api(
    ApiConstants.COUNTRY_STATUS + name,
    null,
    'get',
    null,
  );
}
export function getCountryNews(name) {
  return Api(
    ApiConstants.COUNTRY_NEWS + name,
    null,
    'get',
    null,
  );
}
export function getCountryTimeline(name) {
  return Api(
    ApiConstants.COUNTRY_TIMELINE + name,
    null,
    'get',
    null,
  );
}
