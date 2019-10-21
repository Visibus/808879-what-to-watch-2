import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import movieNames from "./components/data/data";

const init = () => {
  ReactDOM.render(
      <App
        movieNames={movieNames}
      />,
      document.querySelector(`#root`)
  );
};

init();
