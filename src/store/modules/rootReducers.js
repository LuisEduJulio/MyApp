import { combineReducers } from 'redux';
import auth from './reducers/AuthReducers';

const rootReducer = combineReducers({
    auth
})

export default rootReducer;