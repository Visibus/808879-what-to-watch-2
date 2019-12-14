import TabOverview from "./tab-overview";
import films from "../../mocks/films";

it(`TabDetails component renders correctly`, () => {
  const tree = window.renderer
    .create(
        <TabOverview currentTab={`Overview`} indexTab={`Overview`} film={films[0]}>
        </TabOverview>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
