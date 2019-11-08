import {ActionCreator, reducer} from "./reducer";

describe(`Action creators work correctly`, () => {
  it(`returns correct action on setting selected genre`, () => {
    expect(ActionCreator.setSelectedGenre(`Comedy`)).toEqual({
      type: `SET_SELECTED_GENRE`,
      payload: `Comedy`,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`should set selectedGenre as a given payload`, () => {
    expect(reducer({
      selectedGenre: `All genres`,
      movies: [],
    }, {
      type: `SET_SELECTED_GENRE`,
      payload: `Adventure`,
    })).toEqual({
      selectedGenre: `Adventure`,
      movies: [],
    });
  });
});
