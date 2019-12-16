import apiDispatcher from "./api-dispatcher";

import createAPI from "../../api";
import MockAdapter from "axios-mock-adapter";

describe(`Api-dspatcher works correctly`, () => {

  it(`Load movies`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const moviesLoader = apiDispatcher.loadMovies();

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
    const authorization = apiDispatcher.signIn(`vvv@vvv.ru`, `pa$$w0rd`);

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

  it(`Should make correct API call to /films/promo`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = apiDispatcher.loadPromoMovie();

    apiMock
      .onGet(`films/promo`)
      .reply(200, {fake: true});

    return filmsLoader(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_PROMO`,
          payload: {fake: true},
        });
      });
  });

  it(`Action creator correctly load comments`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loadComments = apiDispatcher.loadComments(1);

    apiMock
      .onGet(`comments/1`)
      .reply(200, [{fake: true}]);

    return loadComments(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_COMMENTS`,
          payload: [{fake: true}],
        });
      });
  });

  it(`should make correct API POST call to /favorite/:id/1`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const favoritePoster = apiDispatcher.postFavorite(1, false, false);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, {fakeFilm: true, isFavorite: true});

    return favoritePoster(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `ADD_TO_FAVORITE_MOVIES`,
          payload: {fakeFilm: true, isFavorite: true},
        });
      });
  });

  it(`should make correct API POST call to /favorite/:id/0`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const favoritePoster = apiDispatcher.postFavorite(1, true, false);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, {fakeFilm: true, isFavorite: false});

    return favoritePoster(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `DELETE_FROM_FAVORITE_MOVIES`,
          payload: {fakeFilm: true, isFavorite: false},
        });
      });
  });

  it(`Action creator correctly load favorite films`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loadFavoriteFilms = apiDispatcher.loadFavoriteMovies();

    apiMock
      .onGet(`favorite`)
      .reply(200, [{fake: true}]);

    return loadFavoriteFilms(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_FAVORITE_MOVIES`,
          payload: [{fake: true}],
        });
      });
  });

});


