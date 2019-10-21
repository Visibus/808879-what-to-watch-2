import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from "./main-page";

Enzyme.configure({adapter: new Adapter()});

it(`bunton click calls once`, () => {
  const clickHandler = jest.fn();
  const movieNames = [`Movie1`, `Movie2`, `Movie3`, `Movie4`];
  const wrapper = shallow(
      <MainPage
        movieNames={movieNames}
        onTitleClick={clickHandler} />
  );

  wrapper.find(`.small-movie-card__title`).at(0).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
