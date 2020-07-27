import produce from 'immer';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_REQUEST, SIGN_UP_REQUEST } from '../actionsTypes';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case SIGN_IN_SUCCESS: {
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case SIGN_IN_FAILURE: {
        draft.loading = false;
        break;
      }
      case SIGN_UP_REQUEST:{
        draft.loading = true;
        break;
      }
      case SIGN_OUT_REQUEST: {
        draft.signed = false;
        break;
      }
      default:
    }
  });
}