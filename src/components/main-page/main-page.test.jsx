import MainPage from "./main-page";
import films from "../../mocks/films";
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore(() => ({
  selectedGenre: `All genres`,
  movies: []
}));

it(`main page correctly renders after relaunch`, () => {
  const tree = window.renderer
     .create(
         <Provider store={store}>
           <MainPage
             films={films}
           />
         </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

