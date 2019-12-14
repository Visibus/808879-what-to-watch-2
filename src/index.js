import ReactDOM from "react-dom";
import App from "./components/app/app";
import {reducer} from './/reducer/reducers';
import apiDispatcher from ".//reducer/api-dispatcher/api-dispatcher";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {compose} from "recompose";
import createAPI from "./api";
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";

const history = createBrowserHistory();

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
        <Router history={history}>
          <App history={history} />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
