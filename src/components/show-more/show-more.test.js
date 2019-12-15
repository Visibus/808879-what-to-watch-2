import ShowMore from "./show-more";

it(`renders correctly`, () => {
  const tree = window.renderer
    .create(<ShowMore onClick={jest.fn()}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
