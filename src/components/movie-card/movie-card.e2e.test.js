import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

import films from "../../mocks/films";

Enzyme.configure({adapter: new Adapter()});

it(`Movie have state - isPlaying`, () => {
  const movie = shallow(<MovieCard
    film={films[0]}
    id={0}
  />);

  expect(movie.state(`isPlaying`)).toBe(false);
});

describe(`Show movie preview`, () => {
  const movie = shallow(<MovieCard
    film={films[0]}
    id={0}
  />);

  it(`Movie set state isPlaying - true, when mouseenter`, () => {
    movie.simulate(`mouseEnter`);

    setTimeout(() => {
      expect(movie.state(`isPlaying`)).toBe(true);
    }, 1000);
  });

  it(`Movie set state isPlaying - false, when mouseleave`, () => {
    movie.simulate(`mouseLeave`);

    expect(movie.state(`isPlaying`)).toBe(false);
  });
});
