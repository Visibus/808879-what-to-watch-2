import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movieNames from "./components/data/data.jsx";

const init = () => {
  ReactDOM.render(
      <App
        movieNames={movieNames}
      />,
      document.querySelector(`#root`)
  );
};

init();
