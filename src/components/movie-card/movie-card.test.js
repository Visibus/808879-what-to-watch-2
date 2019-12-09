import MovieCard from "./movie-card";
import {BrowserRouter} from 'react-router-dom';

const films = [{
  id: 4,
  previewVideoLink: ``,
  movieTitle: ``,
  previewImage: ``
}];

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <BrowserRouter><MovieCard
        film={films[0]}
        onTitleClick={jest.fn()}
        onMovieEnter={jest.fn()}
        onMovieLeave={jest.fn()}
        isPlaying={false}
      /></BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
