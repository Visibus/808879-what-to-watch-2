import renderer from "react-test-renderer";
import App from "./app";

it(`app correctly renders after relaunch`, () => {
  const movieNames = [`Movie1`, `Movie2`, `Movie3`, `Movie4`];
  const tree = renderer
     .create(<App
       movieNames={movieNames}
     />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
