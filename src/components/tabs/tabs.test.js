import Tabs from "./tabs.jsx";

import films from "../../mocks/films";

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <Tabs film={films[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
