import App from "./app";
import films from "../../mocks/films";
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore(() => ({
  selectedGenre: `All genres`,
  movies: []
}));

it(`app correctly renders after relaunch`, () => {
  const tree = window.renderer
     .create(
         <Provider store={store}>
           <App
             films={films}
           />
         </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
