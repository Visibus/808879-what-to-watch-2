import renderer from "react-test-renderer";
import MoviesList from "./movie-list";
import films from "../../mocks/films";

it(`renders correctly`, () => {
  const tree = renderer.create(
      <MoviesList
        films={films} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
