import axios from "axios";
import ActionCreator from "./reducer/actions/actions";
import {AXIOS_SETTINGS} from "./helpers/helpers";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: AXIOS_SETTINGS.BASE_URL,
    timeout: AXIOS_SETTINGS.TIMER,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === AXIOS_SETTINGS.ERROR_AUTHORIZATION) {
      dispatch(ActionCreator.setRequiredAuthorization(true));
      history.push(`/login`);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
