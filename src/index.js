import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";

const init = (filmMock) => {
  ReactDOM.render(
      <App
        films={filmMock}
      />,
      document.querySelector(`#root`)
  );
};

init(films);
