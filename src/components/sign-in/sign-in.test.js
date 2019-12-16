import SignIn from "./sign-in";
import {BrowserRouter} from "react-router-dom";

it(`SignIn correctly renders after relaunch`, () => {
  const tree = window.renderer.create(
      <BrowserRouter><SignIn
        userEmail={``}
        userPassword={``}
        onChangeUserEmail={jest.fn()}
        onChangeUserPassword={jest.fn()}
        onSubmitSignIn={jest.fn()}
        isAuthorizationRequired={false}
        errorLogin={``}
      /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
