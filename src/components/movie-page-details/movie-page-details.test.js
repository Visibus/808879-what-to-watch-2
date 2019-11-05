import MoviePageDetails from './movie-page-details';
import films from '../../mocks/films';

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <MoviePageDetails
        film={films[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
