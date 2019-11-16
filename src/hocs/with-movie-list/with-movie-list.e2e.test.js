import withMovieList from "./with-movie-list";

const MockComponent = () => <div />;
const MockComponentWrapped = withMovieList(MockComponent);

it(`Should change activeCard when call onMouseEnter`, () => {
  const wrapper = window.shallow(<MockComponentWrapped />);

  expect(wrapper.state().activeCard).toEqual(null);
});
