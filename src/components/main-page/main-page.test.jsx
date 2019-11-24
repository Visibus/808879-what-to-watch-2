import MainPage from "./main-page";
import films from "../../mocks/films";
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore(() => ({
  selectedGenre: `All genres`,
  movies: []
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
         <Provider store={store}>
           <MainPage
             films={films}
             isAuthorizationRequired = {false}
             userData = {userData}
           />
         </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

