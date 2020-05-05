import {
  PLANETS,
  PLANETS_SUCCESS,
  PLANETS_FAIL
} from './types';
import { PLANETS_URL } from '../helper/Constants';
import { CallAPI } from '../helper/ApiService';

/**
 * API call to search planets
 */
export const searchPlanets = (searchText) => (dispatch) => {
  dispatch({ type: PLANETS });
  const appUrl = `${PLANETS_URL}?search=${searchText}`;
  const config = {
    url: appUrl,
    method: 'GET',
  };
  CallAPI(config, respnse => onPlanetSuccess(dispatch, respnse), error => onPlanetError(dispatch, error));
};

/**
 * API request success callback function
 */
const onPlanetSuccess = (dispatch, response) => {
  if (response && response.data && (response.status === 200 || response.status === 201)) {
    const listData = response.data.results || [];
    dispatch({
      type: PLANETS_SUCCESS,
      payload: listData.sort((value1, value2) => {
        return value1.population - value2.population;
      })
    });
  }
}

/**
 * API request error callback function
 */
const onPlanetError = (dispatch, error) => {
  dispatch({ type: PLANETS_FAIL });
  console.log('onError: ', error);
}
