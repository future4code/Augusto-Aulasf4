import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/augusto'

export const setErrorMsg = (errorMsg) => ({
  type: 'SET_ERROR',
  payload: {
    errorMsg: errorMsg
  }
})

export const setErrorAdminMsg = (errorAdminMsg) => ({
  type: 'SET_ERROR_ADMIN',
  payload: {
    errorAdminMsg: errorAdminMsg
  }
})

export const setErrorIfNotAdminMsg = (errorNotAdminMsg) => ({
  type: 'SET_ERROR_NOT_ADMIN',
  payload: {
    errorNotAdminMsg: errorNotAdminMsg
  }
})

export const login = (email, password) => async dispatch => {
  try {

    dispatch(setErrorMsg(false))

    const response = await axios.post(`${urlBase}/login`,
      {
        email,
        password
      }
    );

    window.localStorage.setItem("admin", response.data.user.admin);
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.admin));
  } catch (e) {
    dispatch(setErrorMsg('errorLogin'))
  }
};

export const signUp = (email, password) => async dispatch => {
  try {

    dispatch(setErrorAdminMsg(false))

    const response = await axios.post(`${urlBase}/signup`,
      {
        email,
        password
      }
    );
    dispatch(setErrorAdminMsg('successRegister'))
  } catch (err) {
    dispatch(setErrorAdminMsg('errorRegister'))
  }
};
