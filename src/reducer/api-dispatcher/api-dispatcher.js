
import ActionCreator from "../actions/actions";

const apiDispatcher = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(ActionCreator.loadMovies(response.data));
    });
  },
  signIn: (email, password) => (dispatch, _, api) => {
    return api.post(`login`, {email, password}).then((response) => {
      if (response.data) {
        dispatch(ActionCreator.saveUserData(response.data));
        dispatch(ActionCreator.setRequiredAuthorization(false));
      } else {
        const errorObject = JSON.parse(JSON.stringify(response));
        dispatch(ActionCreator.setErrorLogin(errorObject.message));
      }
    })
    .catch(() => {
      dispatch(ActionCreator.setErrorLogin(`Network error`));
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
        return status ? dispatch(ActionCreator.addToFavoriteMovies(response.data)) : dispatch(ActionCreator.deleteFromFavoriteMovies(response.data));
      });
  },
  loadComments: (id) => (dispatch, _, api) => {
    return api.get(`comments/${id}`)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.loadComments(response.data));
        }
      });
  },
  postReview: (review, id) => (dispatch, _, api) => {
    return api.post(`comments/${id}`, review)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.loadComments(response.data));
          return response;
        } else {
          return response;
        }
      });
  },
  loadFavoriteMovies: () => (dispatch, _, api) => {
    return api.get(`favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteMovies(response.data));
      });
  },
};

export default apiDispatcher;
