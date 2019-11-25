import SignIn from './sign-in';

it(`SignIn correctly renders after relaunch`, () => {
  const tree = window.renderer.create(<SignIn
    userEmail={``}
    userPassword={``}
    onChangeUserEmailHandler={jest.fn()}
    onChangeUserPasswordHandler={jest.fn()}
    onSubmitSignIn={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
