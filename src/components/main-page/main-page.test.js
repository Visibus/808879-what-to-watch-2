import MainPage from "./main-page";
import films from "../../mocks/films";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

const store = createStore(() => ({
  selectedGenre: `All genres`,
  movies: [],
  isAuthorizationRequired: false,
  userData: {},
  promo: {},
}));

const userData = {
  id: 1,
  name: `Vit`,
  email: `vit@mail.ru`,
  avatarUrl: `avatara`
};

it(`main page correctly renders after relaunch`, () => {
  const tree = window.renderer
     .create(
         <BrowserRouter><Provider store={store}>
           <MainPage
             films={films}
             isAuthorizationRequired = {false}
             userData = {userData}
             promo={films[0]}
             onPostFavorite={jest.fn()}
           />
         </Provider></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

