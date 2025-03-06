import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  ADD_USERS,
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILURE,
} from "../../actions/users";

export const initialState = {
  userList: [],
  newUser: {},
  error: "",
};

export default (state = initialState, action: { type: any; data: any }) => {
  switch (action.type) {
    case GET_USERS:
      return state;
    case GET_USERS_SUCCESS:
      return {
        ...state,
        userList: action.data,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        error: action.data,
      };
    case ADD_USERS:
      return state;
    case ADD_USERS_SUCCESS:
      return {
        ...state,
        newUser: action.data,
      };
    case ADD_USERS_FAILURE:
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
};
