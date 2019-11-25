import films from "../../mocks/films";
import withMovieCard from "./with-movie-card";

const MockComponent = () => <div />;
const MockComponentWrapped = withMovieCard(MockComponent);

it(`HOC have state - isPlaying`, () => {
  const wrapped = window.mount(<MockComponentWrapped />);

  expect(wrapped.state()).toHaveProperty(`isPlaying`);
});

describe(`Show movie preview`, () => {
  const movie = window.shallow(<MockComponentWrapped
    film={films[0]}
    id={0}
    key={0}
    onMovieEnter={jest.fn()}
    isAuthorizationRequired = {false}
  />);

  it(`Movie set state isPlaying - true, when mouseenter`, () => {
    movie.simulate(`mouseEnter`);

    setTimeout(() => {
      expect(movie.state(`isPlaying`)).toBeTruthy();
    }, 1000);
  });

  it(`Movie set state isPlaying - false, when mouseleave`, () => {
    movie.simulate(`mouseLeave`);

    expect(movie.state(`isPlaying`)).toBeFalsy();
  });
});
