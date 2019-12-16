import AdapterMovie from "../adapters/adapter-movie/adapter-movie";
import AdapterLogin from "../adapters/adapter-login/adapter-login";
import AdapterComment from "../adapters/adapter-comment/adapter-comment";
import Action from "./constants";
import {getId, changeFilm} from "../helpers/helpers";

const AMOUNT_CARS_SHOW = 8;

export const initialState = {
  selectedGenre: `All genres`,
  movies: [],
  amountCardsShow: AMOUNT_CARS_SHOW,
  isAuthorizationRequired: true,
  userData: {},
  promo: {},
  isFilmPlaying: false,
  comments: null,
  idSelectedMovie: 0,
  isFavoriteActually: false,
  favorites: [],
  errorLoadingReview: ``,
  errorLogin: ``,
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case Action.SET_SELECTED_GENRE:
      return Object.assign({}, state, {
        selectedGenre: action.payload
      });
    case Action.SET_CARDS_SHOWN_AMOUNT:
      return Object.assign({}, state, {
        amountCardsShow: state.amountCardsShow + action.payload
      });
    case Action.RESET_SHOWN_CARDS:
      return Object.assign({}, state, {
        amountCardsShow: initialState.amountCardsShow
      });
    case Action.LOAD_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload.map((data) => AdapterMovie.parseMovies(data)),
      });
    case Action.LOAD_PROMO:
      return Object.assign({}, state, {
        promo: AdapterMovie.parseMovies(action.payload),
        idSelectedMovie: getId(action.payload),
      });
    case Action.UPDATE_PROMO: return Object.assign({}, state, {
      promo: AdapterMovie.parseMovies(action.payload),

    });
    case Action.SET_REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
    case Action.SAVE_USER_DATA:
      return Object.assign({}, state, {
        userData: AdapterLogin.parseLogins(action.payload)
      });
    case Action.CHANGE_ACTIVE_STATUS:
      return Object.assign({}, state, {
        isFilmPlaying: action.payload,
      });
    case Action.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload.map((data) => AdapterComment.parseComments(data))
      });
    case Action.CHANGE_SELECTED_MOVIE:
      return Object.assign({}, state, {
        idSelectedMovie: action.payload
      });
    case Action.LOAD_FAVORITE_MOVIES:
      return Object.assign({}, state, {
        favorites: action.payload.map((data) => AdapterMovie.parseMovies(data)),
        isFavoriteActually: true,
      });
    case Action.ADD_TO_FAVORITE_MOVIES:
      return Object.assign({}, state, {
        movies: changeFilm(state.movies, AdapterMovie.parseMovies(action.payload)),
        isFavoriteActually: false,
      });
    case Action.DELETE_FROM_FAVORITE_MOVIES:
      return Object.assign({}, state, {
        movies: changeFilm(state.movies, AdapterMovie.parseMovies(action.payload)),
        isFavoriteActually: false,
      });
    case Action.UPLOAD_REVIEW:
      return Object.assign({}, state, {
        errorLoadingReview: action.payload,
      });
    case Action.SET_ERROR_LOGIN:
      return Object.assign({}, state, {
        errorLogin: action.payload,
      });

    default:
      return state;
  }
};


export {reduce, AMOUNT_CARS_SHOW};
