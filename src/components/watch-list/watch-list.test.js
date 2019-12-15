import WatchList from "./watch-list";
import {BrowserRouter} from "react-router-dom";
import films from "../../mocks/films.js";

it(`FavoriteList component renders correctly`, () => {
  const tree = window.renderer
    .create(<BrowserRouter>
      <WatchList
        isAuthorizationRequired={true}
        userData={{id: 1, name: `fake`, email: `test@mail.ru`, avatarUrl: ``}}
        films={films}
      >
      </WatchList>
    </BrowserRouter>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
