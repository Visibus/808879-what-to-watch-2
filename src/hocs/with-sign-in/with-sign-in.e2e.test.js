import withSignIn from "./with-sign-in";


describe(`withSignin hoc works correctly`, () => {
  let signIn;
  const MockComponent = ({email, password, onChangeUserEmail, onChangeUserPassword, onSubmitSignIn}) => (
    <div>
      <form action="#" className="sign-in__form" onSubmit={onSubmitSignIn}>
        <input type="email" value={email} onChange={onChangeUserEmail} />
        <input type="password" value={password} onChange={onChangeUserPassword} />
      </form>
    </div>
  );

  MockComponent.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    onChangeUserEmail: PropTypes.func,
    onChangeUserPassword: PropTypes.func,
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
