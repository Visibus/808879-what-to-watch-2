import Action from "../constants";

const ActionCreator = {
  setSelectedGenre: (genre) => ({
    type: Action.SET_SELECTED_GENRE,
    payload: genre
  }),
  setCardsShownAmount: (amount) => ({
    type: Action.SET_CARDS_SHOWN_AMOUNT,
    payload: amount
  }),
  resetShownCards: () => ({
    type: Action.RESET_SHOWN_CARDS,
  }),
  loadMovies: (movies) => ({
    type: Action.LOAD_MOVIES,
    payload: movies
  }),
  loadPromo: (movie) => ({
    type: Action.LOAD_PROMO,
    payload: movie,
  }),
  updatePromo: (movie) => ({
    type: Action.UPDATE_PROMO,
    payload: movie,
  }),
  saveUserData: (userData) => ({
    type: Action.SAVE_USER_DATA,
    payload: userData
  }),
  setRequiredAuthorization: (bool) => ({
    type: Action.SET_REQUIRED_AUTHORIZATION,
    payload: bool
  }),
  onOpenCloseFilm: (status) => ({
    type: Action.CHANGE_ACTIVE_STATUS,
    payload: status,
  }),
  loadComments: (comments) => ({
    type: Action.LOAD_COMMENTS,
    payload: comments,
  }),
  changeSelectedMovie: (id) => ({
    type: Action.CHANGE_SELECTED_MOVIE,
    payload: id,
  }),
  blockForm: (bool) => ({
    type: Action.BLOCK_FORM,
    payload: bool,
  }),
  cleanForm: (bool) => ({
    type: Action.CLEAN_FORM,
    payload: bool,
  }),
  loadFavoriteMovies: (favorites) => ({
    type: Action.LOAD_FAVORITE_MOVIES,
    payload: favorites,
  }),
  addToFavoriteMovies: (movie) => ({
    type: Action.ADD_TO_FAVORITE_MOVIES,
    payload: movie,
  }),
  deleteFromFavoriteMovies: (movie) => ({
    type: Action.DELETE_FROM_FAVORITE_MOVIES,
    payload: movie,
  }),
  setErrorLogin: (error) => ({
    type: Action.SET_ERROR_LOGIN,
    payload: error,
  }),
};

export default ActionCreator;

