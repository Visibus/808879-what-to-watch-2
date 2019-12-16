const withSignIn = (Component) => {
  class WithSignIn extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._handlerChangeUserEmail = this._handlerChangeUserEmail.bind(this);
      this._handlerChangeUserPassword = this._handlerChangeUserPassword.bind(this);
      this._handlerSubmitForm = this._handlerSubmitForm.bind(this);
    }

    _handlerChangeUserEmail(evt) {
      this.setState({
        email: evt.target.value,
      });
    }

    _handlerChangeUserPassword(evt) {
      this.setState({
        password: evt.target.value,
      });
    }

    _handlerSubmitForm(evt) {
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
        onChangeUserEmail = {this._handlerChangeUserEmail}
        onChangeUserPassword = {this._handlerChangeUserPassword}
        onSubmitSignIn = {this._handlerSubmitForm}
      />;
    }
  }

  WithSignIn.propTypes = {
    onSubmitSignIn: PropTypes.func,
  };

  return WithSignIn;
};

export default withSignIn;
