import {
    PLANET_DETAILS,
    PLANET_DETAILS_SUCCESS,
    PLANET_DETAILS_FAIL
  } from './types';
  import { PEOPLE_URL } from '../helper/Constants';
  import { CallAPI } from '../helper/ApiService';
  
  /**
   * API call to fatch planet details
   */
  export const planetDetailsAction= (planetDetailUrl) => (dispatch) => {
    dispatch({ type: PLANET_DETAILS });
    const config = {
      url: planetDetailUrl,
      method: 'GET',
    };
    CallAPI(config, respnse => onDetailsSuccess(dispatch, respnse), error => onDetailsError(dispatch, error));
  };
  
  /**
   * API request success callback function
   */
  const onDetailsSuccess = (dispatch, response) => {
    console.log('response.data', response.data);
    if (response && response.data && (response.status === 200 || response.status === 201)) {
      dispatch({
        type: PLANET_DETAILS_SUCCESS,
        payload: response.data || {}
      });
    }
  }
  
  /**
   * API request error callback function
   */
  const onDetailsError = (dispatch, error) => {
    dispatch({ type: PLANET_DETAILS_FAIL });
    console.log('onError: ', error);
  }