import {SET_SELECTED_GENRE, SET_CARDS_SHOWN_AMOUNT, RESET_SHOWN_CARDS, LOAD_MOVIES, REQUIRED_AUTHORIZATION,
  SAVE_USER_DATA, LOAD_PROMO, UPDATE_PROMO, CHANGE_ACTIVE_STATUS} from "../constants";

const ActionCreator = {
  setSelectedGenre: (genre) => ({
    type: SET_SELECTED_GENRE,
    payload: genre
  }),
  setCardsShownAmount: (amount) => ({
    type: SET_CARDS_SHOWN_AMOUNT,
    payload: amount
  }),
  resetShownCards: () => ({
    type: RESET_SHOWN_CARDS,
  }),
  loadMovies: (movies) => ({
    type: LOAD_MOVIES,
    payload: movies
  }),
  loadPromo: (movie) => ({
    type: LOAD_PROMO,
    payload: movie,
  }),
  updatePromo: (movie) => ({
    type: UPDATE_PROMO,
    payload: movie,
  }),
  saveUserData: (userData) => ({
    type: SAVE_USER_DATA,
    payload: userData
  }),
  requiredAuthorization: (bool) => ({
    type: REQUIRED_AUTHORIZATION,
    payload: bool
  }),
  onOpenCloseFilm: (status) => ({
    type: CHANGE_ACTIVE_STATUS,
    payload: status,
  }),
};

export default ActionCreator;

