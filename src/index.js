import ReactDOM from "react-dom";
import App from "./components/app/app";
import {reducer} from './/reducer/reducers';
import apiDispatcher from ".//reducer/api-dispatcher/api-dispatcher";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {compose} from "recompose";
import createAPI from "./api";
import {BrowserRouter} from "react-router-dom";

const init = () => {

  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
      )
  );

  store.dispatch(apiDispatcher.loadMovies());
  store.dispatch(apiDispatcher.loadPromoMovie());

  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
