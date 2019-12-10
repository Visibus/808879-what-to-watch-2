import MoviePageDetails from './movie-page-details';
import films from '../../mocks/films';
import {BrowserRouter} from 'react-router-dom';

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <BrowserRouter><MoviePageDetails
        film={films[0]}
        moreLikeThisFilms={films}
        isAuthorizationRequired={false}
        userData={{}}
        onOpenCloseFilm={jest.fn()}
      />
      </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
