import MoviesList from "./movie-list";
import films from "../../mocks/films";
import {BrowserRouter} from 'react-router-dom';

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <BrowserRouter>
        <MoviesList
          films={films}
          isAuthorizationRequired = {false}
        />
      </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
