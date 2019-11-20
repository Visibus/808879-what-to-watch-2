import {ActionCreator, reducer, AMOUNT_CARS_SHOW, Operation} from "./reducer";
import createAPI from './api';
import MockAdapter from "axios-mock-adapter";

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

  it(`Load movies`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const moviesLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, null, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `LOAD_MOVIES`,
        payload: [{fake: true}]
      });
    });
  });

});


