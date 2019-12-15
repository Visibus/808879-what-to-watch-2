import NotFound from "./not-found";

it(`Is not found rendered`, () => {
  const tree = window.renderer.create(<NotFound/>).toJSON();

  expect(tree).toMatchSnapshot();
});
