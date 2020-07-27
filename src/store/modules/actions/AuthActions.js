import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_REQUEST, SIGN_UP_REQUEST } from '../actionsTypes';

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token },
  };
}

export function signFailure() {
  return {
    type: SIGN_IN_FAILURE,
  };
}

export function singOutResquest() {
  return {
    type: SIGN_OUT_REQUEST,
  }
}

export function signUp(name, email, password){
  return{
    type: SIGN_UP_REQUEST,
    payload: {name, email, password}
  }
}