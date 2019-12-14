import ActionCreator from "./actions/actions";
import {reducer, AMOUNT_CARS_SHOW} from "./reducers";

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

  it(`Reducer correctly change isFilmPlaying`, () => {
    expect(
        reducer(
            {
              isFilmPlaying: false,
            },
            {
              type: `CHANGE_ACTIVE_STATUS`,
              payload: true,
            }
        )
    ).toEqual({
      isFilmPlaying: true,
    });
  });

  it(`Reducer correctly change idSelectedMovie`, () => {
    expect(
        reducer(
            {
              idSelectedMovie: 1,
            },
            {
              type: `CHANGE_SELECTED_MOVIE`,
              payload: 2,
            }
        )
    ).toEqual({
      idSelectedMovie: 2,
    });
  });

  it(`Reducer correctly change errorLoadingReview`, () => {
    expect(
        reducer(
            {
              errorLoadingReview: ``,
            },
            {
              type: `UPLOAD_REVIEW`,
              payload: `Error 403`,
            }
        )
    ).toEqual({
      errorLoadingReview: `Error 403`,
    });
  });

});


