import MoviesList from "./movie-list";
import films from "../../mocks/films";

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <MoviesList
        films={films}
        isAuthorizationRequired = {false}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
