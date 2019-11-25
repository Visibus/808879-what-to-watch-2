import MainPage from "../main-page/main-page";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {connect} from 'react-redux';
import {Operation} from "../../reducer/reducers";
import SignIn from "../../components/sign-in/sign-in";

const redirectTo = (url) => {
  location.href = url;
  return false;
};

const App = (props) => {
  const {films = [], isAuthorizationRequired, onSubmitSignIn, userData} = props;

  switch (location.pathname) {
    case `/`:
      return isAuthorizationRequired ? <SignIn onSubmitSignIn={onSubmitSignIn} /> : <MainPage films={films} isAuthorizationRequired={isAuthorizationRequired} userData={userData} />;
    case `/details`:
      if (!films.length) {
        return null;
      }
      const id = parseInt(location.hash.slice(1), 10);
      const activeMovie = films.find((film)=> +film.id === +id);
      const moreLikeThisFilms = films.filter((film) => film.genre === activeMovie.genre && film.id !== activeMovie.id).slice(0, 4);
      return <MoviePageDetails film={activeMovie} moreLikeThisFilms={moreLikeThisFilms} />;
  }
  return redirectTo(`/`);
};

const mapStateToProps = (state) => ({
  films: state.movies,
  isAuthorizationRequired: state.isAuthorizationRequired,
  userData: state.userData,

});

const mapDispatchToProps = (dispatch) => ({
  onSubmitSignIn: (email, password) => {
    dispatch(Operation.authorization(email, password));
  },
});


App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    movieImg: PropTypes.string.isRequired,
  })),
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
