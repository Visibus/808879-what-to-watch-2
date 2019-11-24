import ActionCreator from "./actions/actions";
import {reducer, AMOUNT_CARS_SHOW, Operation} from "./reducers";

import createAPI from '../api';
import MockAdapter from "axios-mock-adapter";

describe(`Action creators work correctly`, () => {
  it(`returns correct action on setting selected genre`, () => {
    expect(ActionCreator.setSelectedGenre(`Comedy`)).toEqual({
      type: `SET_SELECTED_GENRE`,
      payload: `Comedy`,
    });
  });
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requiredAuthorization(true)).toEqual({
      type: `REQUIRED_AUTHORIZATION`,
      payload: true,
    });
  });
  it(`Action creator for save user data returns correct action`, () => {
    expect(ActionCreator.saveUserData({})).toEqual({
      type: `SAVE_USER_DATA`,
      payload: {},
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

  it(`Should make a correct signin`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authorization = Operation.authorization(`vvv@vvv.ru`, `pa$$w0rd`);

    apiMock
      .onPost(`/login`, {email: `vvv@vvv.ru`, password: `pa$$w0rd`})
      .reply(200, {fake: true});

    return authorization(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `SAVE_USER_DATA`,
          payload: {fake: true},
        });
      });
  });

});


