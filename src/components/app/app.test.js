import App from "./app";
import films from "../../mocks/films";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from 'react-router-dom';

const store = createStore(() => ({
  selectedGenre: `All genres`,
  movies: [],
  isAuthorizationRequired: true,
  userData: {},
  promo: {},
  isFilmPlaying: false,
}));

const userData = {
  id: 1,
  name: `Vit`,
  email: `vit@mail.ru`,
  avatarUrl: `avatara`
};

it(`app correctly renders after relaunch`, () => {
  const tree = window.renderer
     .create(
         <BrowserRouter><Provider store={store}>
           <App
             films={films}
             isAuthorizationRequired = {true}
             userData = {userData}
             onSubmitSignIn={jest.fn()}
             promo = {films[0]}
             onPostFavorite={jest.fn()}
             isFilmPlaying={false}
             onOpenCloseFilm={jest.fn()}
           />
         </Provider></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

