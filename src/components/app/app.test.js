import App from "./app";
import films from "../../mocks/films";
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore(() => ({
  selectedGenre: `All genres`,
  movies: [],
  isAuthorizationRequired: true,
  userData: {}
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
         <Provider store={store}>
           <App
             films={films}
             isAuthorizationRequired = {true}
             userData = {userData}
             onSubmitSignIn={jest.fn()}
           />
         </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

