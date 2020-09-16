import { userService } from '../services';
import alertActions from './alert.action';
import history from '../utils/history';
import { userConstants } from '../constants';

const login = (email, password, from) => dispatch => {
  userService.login(email, password)
    .then(
      user => {
        dispatch({ type: userConstants.LOGIN_SUCCESS, user });
        history.push(from);

        // TODO: Hard redirection because the App component is not re-rendering after dispatching the LOGIN SUCCESS
        window.location.assign('/');
      },
      error => {
        dispatch({ type: userConstants.LOGIN_FAILURE, error: error.toString() });
        dispatch(alertActions.error(error.toString()));
      }
    );
};

const logout = () => {
  userService.logout();

  // TODO: Hard redirection due to issues in component re-rendering. Need to find a solution for this.
  window.location.assign('/login');

  return {
    type: userConstants.LOGOUT
  };
};

const register = user => dispatch => {
  const request = userData => ({ type: userConstants.REGISTER_REQUEST, user: userData });
  const success = userData => ({ type: userConstants.REGISTER_SUCCESS, user: userData });
  const failure = error => ({ type: userConstants.REGISTER_FAILURE, error });

  dispatch(request(user));

  userService.register(user)
    .then(
      userData => {
        dispatch(success(userData));
        history.push('/login');
        dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
};

const getAll = () => {
  const request = () => ({ type: userConstants.GETALL_REQUEST });
  const success = users => ({ type: userConstants.GETALL_SUCCESS, users });
  const failure = error => ({ type: userConstants.GETALL_FAILURE, error });

  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
      );
  };
};

const deleteUser = id => {
  const request = idData => ({ type: userConstants.DELETE_REQUEST, id: idData });
  const success = idData => ({ type: userConstants.DELETE_SUCCESS, id: idData });
  const failure = (idData, error) => ({ type: userConstants.DELETE_FAILURE, id: idData, error });

  return dispatch => {
    dispatch(request(id));

    userService.delete(id)
      .then(
        () => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };
};

export default {
  delete: deleteUser,
  register,
  logout,
  getAll,
  login
};