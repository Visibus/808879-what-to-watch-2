import MovieCard from "./movie-card";

const films = [{
  id: 4,
  previewVideoLink: ``,
  movieTitle: ``,
  previewImage: ``
}];

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <MovieCard
        film={films[0]}
        onTitleClick={jest.fn()}
        onMovieEnter={jest.fn()}
        onMovieLeave={jest.fn()}
        isPlaying={false}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
