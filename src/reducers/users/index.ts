import {
	GET_USERS,
	GET_USERS_SUCCESS,
	GET_USERS_FAILURE,
} from '../../actions/users';

export const initialState = {
	userList: [],
};

export default (state = initialState, action: { type: any; data: any; }) => {
	switch (action.type) {
		case GET_USERS:
			return state;
		case GET_USERS_SUCCESS:
			return {
				...state,
				userList: action.data,
			};
		case GET_USERS_FAILURE:
			return state;
		default:
			return state;
	}
};