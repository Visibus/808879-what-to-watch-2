import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import {reducer} from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const init = (filmMock) => {
  const store = createStore(reducer);
  ReactDOM.render(
      <Provider store={store}>
        <App
          films={filmMock}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(films);
