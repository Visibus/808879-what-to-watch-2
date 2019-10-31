import renderer from "react-test-renderer";
import MainPage from "./main-page";
import films from "../../mocks/films";

it(`main page correctly renders after relaunch`, () => {
  const tree = renderer
     .create(<MainPage
       films={films}
     />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

