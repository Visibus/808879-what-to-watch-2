import renderer from "react-test-renderer";
import MainPage from "./main-page";

it(`main page correctly renders after relaunch`, () => {
  const movieNames = [`Movie1`, `Movie2`, `Movie3`, `Movie4`];
  const tree = renderer
     .create(<MainPage
       movieNames={movieNames}
     />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
