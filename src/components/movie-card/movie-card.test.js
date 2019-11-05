import MovieCard from "./movie-card";

import films from "../../mocks/films";

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <MovieCard
        film={films[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
