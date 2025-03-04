import { combineReducers } from 'redux';
import userReducer from '../reducers/users';

const appReducer = combineReducers({
	user: userReducer,
});

export default appReducer;