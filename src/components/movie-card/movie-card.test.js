import MovieCard from "./movie-card";

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <MovieCard
        film={[]}
        onTitleClick={jest.fn()}
        onMovieEnter={jest.fn()}
        onMovieLeave={jest.fn()}
        isPlaying={false}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
