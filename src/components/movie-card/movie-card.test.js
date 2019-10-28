import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

import films from "../../mocks/films";

it(`renders correctly`, () => {
  const tree = renderer.create(
      <MovieCard
        film={films[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
