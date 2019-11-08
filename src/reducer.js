import films from "./mocks/films";

const SET_SELECTED_GENRE = `SET_SELECTED_GENRE`;

export const initialState = {
  selectedGenre: `All genres`,
  movies: films
};

const ActionCreator = {
  setSelectedGenre: (genre) => ({
    type: SET_SELECTED_GENRE,
    payload: genre
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_GENRE:
      return Object.assign({}, state, {
        selectedGenre: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionCreator};
