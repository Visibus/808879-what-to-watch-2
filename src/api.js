import axios from "axios";
import ActionCreator from './reducer/actions/actions';
import {TIMER_AXIOS, ERROR_AUTHORIZATION} from "./helpers/helpers";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: TIMER_AXIOS,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === ERROR_AUTHORIZATION) {
      dispatch(ActionCreator.requiredAuthorization(true));
      history.push(`/login`);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
