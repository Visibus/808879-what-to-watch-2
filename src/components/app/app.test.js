import App from "./app";
import films from "../../mocks/films";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

const store = createStore(() => ({
  selectedGenre: `All genres`,
  movies: [],
  isAuthorizationRequired: true,
  userData: {},
  promo: {},
  isFilmPlaying: false,
  comments: null,
  idSelectedMovie: 0,
  isFavoriteActually: false,
  favorites: [],
  errorLoadingReview: ``,
  errorLogin: ``,
}));

const userData = {
  id: 1,
  name: `Vit`,
  email: `vit@mail.ru`,
  avatarUrl: `avatara`
};

const comments = {
  id: 1,
  user: {
    id: 1,
    name: `Tom`,
  },
  rating: 1,
  comment: `test`,
  date: `2019-12-13T07:19:14.627Z`,
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
             comments={comments}
             onLoadComments={jest.fn()}
             onChangeSelectedMovie={jest.fn()}
             idSelectedMovie={1}
             onLoadFavorites={jest.fn()}
             isFavoriteActually={false}
             favorites={films[0]}
             history={{push: jest.fn()}}
           />
         </Provider></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

