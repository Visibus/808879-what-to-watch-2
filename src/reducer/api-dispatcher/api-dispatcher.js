
import ActionCreator from "../actions/actions";

const apiDispatcher = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(ActionCreator.loadMovies(response.data));
    });
  },
  authorization: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {email, password}).then((response) => {
      dispatch(ActionCreator.saveUserData(response.data));
      dispatch(ActionCreator.requiredAuthorization(false));
    });
  },
  loadPromoMovie: () => (dispatch, _, api) => {
    return api.get(`films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromo(response.data));
      });
  },
  postFavorite: (id, isFavorite, isPromo) => (dispatch, _, api) => {
    const status = isFavorite ? 0 : 1;
    return api.post(`favorite/${id}/${status}`)
      .then((response) => {
        if (isPromo) {
          dispatch(ActionCreator.updatePromo(response.data));
        }
      });
  },
};

export default apiDispatcher;
