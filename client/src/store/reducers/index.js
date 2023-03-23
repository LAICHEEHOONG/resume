import { combineReducers } from 'redux';
import users from './users_reducer';

const appReducers = combineReducers({
    users
});

export default appReducers;