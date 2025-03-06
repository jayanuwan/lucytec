export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const ADD_USERS = "ADD_USERS";
export const ADD_USERS_SUCCESS = "ADD_USERS_SUCCESS";
export const ADD_USERS_FAILURE = "ADD_USERS_FAILURE";

export const DELETE_USERS = "DELETE_USERS";
export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";
export const DELETE_USERS_FAILURE = "DELETE_USERS_FAILURE";

export const getUsers = {
  request: () => ({ type: GET_USERS }),
  success: (data: any) => ({ type: GET_USERS_SUCCESS, data }),
  failure: (error: any) => ({ type: GET_USERS_FAILURE, error }),
};

export const addUsers = {
  request: (param: any) => ({ type: ADD_USERS, param }),
  success: (data: any) => ({ type: ADD_USERS_SUCCESS, data }),
  failure: (error: any) => ({ type: ADD_USERS_FAILURE, error }),
};

export const deleteUsers = {
  request: (param: any) => ({ type: DELETE_USERS, param }),
  success: (data: any) => ({ type: DELETE_USERS_SUCCESS, data }),
  failure: (error: any) => ({ type: DELETE_USERS_FAILURE, error }),
};
