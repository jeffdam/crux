import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

const logoutCurrentUser= () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors= (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const signup = userForm => dispatch => (
  SessionApiUtil.signup(userForm)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = userForm => dispatch => (
  SessionApiUtil.login(userForm)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);