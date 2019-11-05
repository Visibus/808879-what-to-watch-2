import App from "./app";
import films from "../../mocks/films";

it(`app correctly renders after relaunch`, () => {
  const tree = window.renderer
     .create(<App
       films={films}
     />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
