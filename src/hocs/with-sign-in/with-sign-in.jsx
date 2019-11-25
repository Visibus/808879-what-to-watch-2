const withSignIn = (Component) => {
  class WithSignIn extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._onChangeUserEmailHandler = this._onChangeUserEmailHandler.bind(this);
      this._onChangeUserPasswordHandler = this._onChangeUserPasswordHandler.bind(this);
      this._onSubmitFormHandler = this._onSubmitFormHandler.bind(this);
    }

    _onChangeUserEmailHandler(evt) {
      this.setState({
        email: evt.target.value,
      });
    }

    _onChangeUserPasswordHandler(evt) {
      this.setState({
        password: evt.target.value,
      });
    }

    _onSubmitFormHandler(evt) {
      evt.preventDefault();
      const {email, password} = this.state;
      const {onSubmitSignIn} = this.props;

      if (email && password) {
        onSubmitSignIn(email, password);
      }
    }

    render() {
      return <Component
        {...this.props}
        userEmail = {this.state.email}
        userPassword = {this.state.password}
        onChangeUserEmailHandler = {this._onChangeUserEmailHandler}
        onChangeUserPasswordHandler = {this._onChangeUserPasswordHandler}
        onSubmitSignIn = {this._onSubmitFormHandler}
      />;
    }
  }

  WithSignIn.propTypes = {
    onSubmitSignIn: PropTypes.func.isRequired,
  };

  return WithSignIn;
};

export default withSignIn;
