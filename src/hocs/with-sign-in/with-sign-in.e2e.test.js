import withSignIn from "./with-sign-in";


describe(`withSignin hoc works correctly`, () => {
  let signIn;
  // let instance;
  const MockComponent = ({email, password, onChangeUserEmailHandler, onChangeUserPasswordHandler, onSubmitSignIn}) => (
    <div>
      <form action="#" className="sign-in__form" onSubmit={onSubmitSignIn}>
        <input type="email" value={email} onChange={onChangeUserEmailHandler} />
        <input type="password" value={password} onChange={onChangeUserPasswordHandler} />
      </form>
    </div>
  );

  MockComponent.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    onChangeUserEmailHandler: PropTypes.func,
    onChangeUserPasswordHandler: PropTypes.func,
    onSubmitSignIn: PropTypes.func,
  };

  const MockComponentWrapped = withSignIn(MockComponent);

  beforeEach(() => {
    signIn = window.mount(<MockComponentWrapped />);
  });

  it(`intial state set correctly`, () => {
    expect(signIn.state(`email`)).toBe(``);
    expect(signIn.state(`password`)).toBe(``);
  });

  it(`onFormChange cb changes state`, () => {
    const input = signIn.find(`input`).first();
    input.simulate(`change`, {target: {name: `email`, value: `123`}});

    expect(signIn.state(`email`)).toBe(`123`);
  });

});
