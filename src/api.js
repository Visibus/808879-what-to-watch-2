import axios from "axios";

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const onSucces = (response) => response;

  const onFail = (err) => err;

  api.interceptors.response.use(onSucces, onFail);

  return api;
};

export default createAPI;
