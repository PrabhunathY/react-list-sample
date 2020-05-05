

import {
  PEOPLE_FAIL,
  PEOPLE_SUCCESS,
  PEOPLE,
  LOGIN_USER
} from './types';
import { PEOPLE_URL } from '../helper/Constants';
import { CallAPI } from '../helper/ApiService';

/**
 * API call to get people listing data
 */
export const getPeople = () => (dispatch) => {
  dispatch({ type: PEOPLE });
  const config = {
    url: PEOPLE_URL,
    method: 'GET',
  };
  CallAPI(config,
    respnse => onPeopleSuccess(dispatch, respnse),
    error => onPeopleError(dispatch, error)
  );
};

/**
 * API request success callback function
 */
const onPeopleSuccess = (dispatch, response) => {
  if (response && response.data && (response.status === 200 || response.status === 201)) {
    dispatch({
      type: PEOPLE_SUCCESS,
      payload: response.data.results || []
    });
  }
}

/**
 * API request error callback function
 */
const onPeopleError = (dispatch, error) => {
  dispatch({ type: PEOPLE_FAIL });
  console.log('onError: ', error);
}

/**
 * API call to get people listing data
 */
export const setLoginUser = (person) => (dispatch) => {
  dispatch({ type: LOGIN_USER, payload: person });
};