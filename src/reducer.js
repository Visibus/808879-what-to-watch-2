import AdapterMovie from "./adapters/adapter-movie/adapter-movie";

const SET_SELECTED_GENRE = `SET_SELECTED_GENRE`;
const SET_CARDS_SHOWN_AMOUNT = `SET_CARDS_SHOWN_AMOUNT`;
const RESET_SHOWN_CARDS = `RESET_SHOWN_CARDS`;
const LOAD_MOVIES = `LOAD_MOVIES`;
const AMOUNT_CARS_SHOW = 8;

export const initialState = {
  selectedGenre: `All genres`,
  movies: [],
  amountCardsShow: AMOUNT_CARS_SHOW,
};

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
        movies: action.payload.map((data) => AdapterMovie.parseMovies(data))
      });
    default:
      return state;
  }
};

const Operation = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(ActionCreator.loadMovies(response.data));
    });
  }
};

export {reducer, ActionCreator, AMOUNT_CARS_SHOW, Operation};
