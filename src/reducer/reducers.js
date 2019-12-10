import AdapterMovie from "../adapters/adapter-movie/adapter-movie";
import AdapterLogin from "../adapters/adapter-login/adapter-login";
import {SET_SELECTED_GENRE, SET_CARDS_SHOWN_AMOUNT, RESET_SHOWN_CARDS, LOAD_MOVIES, REQUIRED_AUTHORIZATION,
  SAVE_USER_DATA, LOAD_PROMO, UPDATE_PROMO, CHANGE_ACTIVE_STATUS} from "./constants";

const AMOUNT_CARS_SHOW = 8;

export const initialState = {
  selectedGenre: `All genres`,
  movies: [],
  amountCardsShow: AMOUNT_CARS_SHOW,
  isAuthorizationRequired: true,
  userData: {},
  promo: {},
  isFilmPlaying: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_GENRE:
      return Object.assign({}, state, {
        selectedGenre: action.payload
      });
    case SET_CARDS_SHOWN_AMOUNT:
      return Object.assign({}, state, {
        amountCardsShow: state.amountCardsShow + action.payload
      });
    case RESET_SHOWN_CARDS:
      return Object.assign({}, state, {
        amountCardsShow: initialState.amountCardsShow
      });
    case LOAD_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload.map((data) => AdapterMovie.parseMovies(data)),
        selectedMovie: action.payload[0] ? 1 : 0,
      });
    case LOAD_PROMO:
      return Object.assign({}, state, {
        promo: AdapterMovie.parseMovies(action.payload),
      });
    case UPDATE_PROMO: return Object.assign({}, state, {
      promo: AdapterMovie.parseMovies(action.payload),
    });
    case REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
    case SAVE_USER_DATA:
      return Object.assign({}, state, {
        userData: AdapterLogin.parseLogins(action.payload)
      });
    case CHANGE_ACTIVE_STATUS:
      return Object.assign({}, state, {
        isFilmPlaying: action.payload,
      });
    default:
      return state;
  }
};


export {reducer, AMOUNT_CARS_SHOW};
