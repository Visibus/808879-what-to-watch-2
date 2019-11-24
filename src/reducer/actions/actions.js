import {SET_SELECTED_GENRE, SET_CARDS_SHOWN_AMOUNT, RESET_SHOWN_CARDS, LOAD_MOVIES, REQUIRED_AUTHORIZATION, SAVE_USER_DATA} from "../constants";

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
  saveUserData: (userData) => ({
    type: SAVE_USER_DATA,
    payload: userData
  }),
  requiredAuthorization: (bool) => ({
    type: REQUIRED_AUTHORIZATION,
    payload: bool
  }),

};

export default ActionCreator;

