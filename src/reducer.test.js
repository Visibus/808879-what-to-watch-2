import {ActionCreator, reducer, AMOUNT_CARS_SHOW} from "./reducer";

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

  it(`should set amountCardsShow correctly`, () => {
    expect(reducer({
      selectedGenre: `All genres`,
      movies: [],
      amountCardsShow: 0,
    }, {
      type: `SET_CARDS_SHOWN_AMOUNT`,
      payload: 5,
    })).toEqual({
      selectedGenre: `All genres`,
      movies: [],
      amountCardsShow: 5,
    });
  });
  it(`should reset amountCardsShow amount`, () => {
    expect(reducer({
      selectedGenre: `All genres`,
      movies: [],
      amountCardsShow: 0,
    }, {
      type: `RESET_SHOWN_CARDS`,
    })).toEqual({
      selectedGenre: `All genres`,
      movies: [],
      amountCardsShow: AMOUNT_CARS_SHOW
    });
  });
});


