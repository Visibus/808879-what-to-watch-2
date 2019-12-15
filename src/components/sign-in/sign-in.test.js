import SignIn from "./sign-in";
import {BrowserRouter} from "react-router-dom";

it(`SignIn correctly renders after relaunch`, () => {
  const tree = window.renderer.create(
      <BrowserRouter><SignIn
        userEmail={``}
        userPassword={``}
        onChangeUserEmailHandler={jest.fn()}
        onChangeUserPasswordHandler={jest.fn()}
        onSubmitSignIn={jest.fn()}
        isAuthorizationRequired={false}
        errorLogin={``}
      /></BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
