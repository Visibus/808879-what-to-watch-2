import Tabs from "./tabs.jsx";

import films from "../../mocks/films";

const comments = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`,
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

it(`renders correctly`, () => {
  const tree = window.renderer.create(
      <Tabs
        film={films[0]}
        comments = {comments}
      >
      </Tabs>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

