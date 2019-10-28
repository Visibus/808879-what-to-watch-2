import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

import films from "../../mocks/films";

Enzyme.configure({adapter: new Adapter()});

it(`correctly handles click on title movie card`, () => {

  const handleTitleClick = jest.fn();
  const wrapper = shallow(
      <MovieCard
        film={films[0]}
        onTitleClick={handleTitleClick} />
  );
  wrapper.find(`.small-movie-card__link`).simulate(`click`);


  expect(handleTitleClick).toHaveBeenCalledTimes(1);
});

it(`correctly handles mouse enter event movie card`, () => {

  const film = films[0];
  const handleMouseEnter = jest.fn();
  const wrapper = shallow(
      <MovieCard
        film={film}
        onMouseEnter={handleMouseEnter} />
  );
  wrapper.find(`.small-movie-card`).simulate(`mouseenter`);

  expect(handleMouseEnter).toHaveBeenCalledTimes(1);
  expect(handleMouseEnter).toHaveBeenCalledWith(film);
});
