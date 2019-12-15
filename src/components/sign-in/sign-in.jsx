import withSignIn from "../../hocs/with-sign-in/with-sign-in";
import {Redirect} from "react-router-dom";

const SignIn = ({userEmail, userPassword, onChangeUserEmailHandler, onChangeUserPasswordHandler, onSubmitSignIn, isAuthorizationRequired, errorLogin}) => {
  return isAuthorizationRequired ? (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmitSignIn}>
          {(errorLogin.length > 0) ?
            <div className="sign-in__message">
              <p>{errorLogin}</p>
            </div> : ``
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={userEmail} onChange={onChangeUserEmailHandler} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={userPassword} onChange={onChangeUserPasswordHandler} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  ) : <Redirect to="/"></Redirect>;
};

SignIn.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userPassword: PropTypes.string.isRequired,
  onChangeUserEmailHandler: PropTypes.func.isRequired,
  onChangeUserPasswordHandler: PropTypes.func.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  errorLogin: PropTypes.string.isRequired,
};

export default withSignIn(SignIn);
