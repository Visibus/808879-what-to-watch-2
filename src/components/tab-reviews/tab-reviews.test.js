import TabReviews from "./tab-reviews";

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
  },
  {
    id: 2,
    user: {
      id: 4,
      name: `Kate Muir`,
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2018-05-08T14:13:56.569Z`
  }
];

it(`TabReviews component renders correctly`, () => {
  const tree = window.renderer
    .create(
        <TabReviews currentTab={`Review`} indexTab={`Review`} comments={comments}>
        </TabReviews>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
