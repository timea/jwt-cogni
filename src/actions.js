import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './reducers/auth'

import { Alert, AsyncStorage } from 'react-native'
import deviceStorage from './services/deviceStorage'
import axios from 'axios'

function signUp() {
  return {
    type: SIGN_UP
  }
}

function signUpSuccess(user) {
  return {
    type: SIGN_UP_SUCCESS,
    user
  }
}

function signUpFailure(err) {
  return {
    type: SIGN_UP_FAILURE,
    error: err
  }
}

export function createUser(username, email) {
  return (dispatch) => {
    dispatch(signUp())
    axios.post("https://cashback-explorer-api.herokuapp.com/users",{
      name: username,
      email: email
    },)
    .then(user => {
      dispatch(signUpSuccess(user))
      // dispatch(confirmSignUpSuccess())
    })
    .catch(err => {
      dispatch(signUpFailure(err))
    });
  }
}

function logIn() {
  return {
    type: LOG_IN
  }
}

export function logOut() {
  return {
    type: LOG_OUT
  }
}

function logInSuccess(user) {
  return {
    type: LOG_IN_SUCCESS,
    user: user
  }
}

function logInFailure(err) {
  return {
    type: LOG_IN_FAILURE,
    error: err
  }
}

export function authenticate(username, email, token) {
  return (dispatch) => {
    dispatch(logIn())
    var headers = {
            'Content-Type': 'application/json',
            'token': token
        }
    axios.post("https://cashback-explorer-api.herokuapp.com/login", {
      name: username,
      email: email
    }, {headers: headers})
    .then(user => {
        dispatch(logInSuccess(user))
        // dispatch(confirmLoginSuccess(user))
      })
      .catch(err => {
        dispatch(logInFailure(err))
      });
  }
}
