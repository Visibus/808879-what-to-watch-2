import TabDetails from "./tab-details";
import films from "../../mocks/films";

it(`TabDetails component renders correctly`, () => {
  const tree = window.renderer
    .create(
        <TabDetails currentTab={`Details`} indexTab={`Details`} film={films[0]}>
        </TabDetails>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
