import apiDispatcher from "./api-dispatcher";

import createAPI from '../../api';
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
    const authorization = apiDispatcher.authorization(`vvv@vvv.ru`, `pa$$w0rd`);

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

});


