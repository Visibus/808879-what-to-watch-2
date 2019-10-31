import renderer from "react-test-renderer";
import MoviePageDetails from './movie-page-details';
import films from '../../mocks/films';

it(`renders correctly`, () => {
  const tree = renderer.create(
      <MoviePageDetails
        film={films[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
