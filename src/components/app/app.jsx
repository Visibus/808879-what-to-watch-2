import MainPage from "../main-page/main-page";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {connect} from 'react-redux';
import apiDispatcher from "../../reducer/api-dispatcher/api-dispatcher";
import ActionCreator from "../../reducer/actions/actions";
import SignIn from "../../components/sign-in/sign-in";
import {Switch, Route} from "react-router-dom";
import VideoPlayerBig from "../../components/video-player-big/video-player-big";

const App = (props) => {
  const {films, isAuthorizationRequired, onSubmitSignIn, userData, promo, onPostFavorite, isFilmPlaying, onOpenCloseFilm} = props;

  return <Switch>
    <Route path="/" exact render={() => {
      return !isFilmPlaying ?
        <MainPage
          films={films}
          isAuthorizationRequired={isAuthorizationRequired}
          userData={userData}
          promo = {promo}
          onPostFavorite={onPostFavorite}
          onOpenCloseFilm={onOpenCloseFilm}
        /> :
        <VideoPlayerBig movieWatch={promo} onOpenCloseFilm={onOpenCloseFilm} />;
    }}
    />
    <Route path="/login" exact render={() => {
      return <SignIn onSubmitSignIn={onSubmitSignIn} isAuthorizationRequired={isAuthorizationRequired} />;
    }}
    />
    <Route path="/films/:id" exact render={(propsMovie) => {
      if (!films.length) {
        return null;
      }
      const id = parseInt(propsMovie.match.params.id, 10);
      const activeMovie = films.find((film)=> +film.id === +id);
      const moreLikeThisFilms = films.filter((film) => film.genre === activeMovie.genre && film.id !== activeMovie.id).slice(0, 4);
      return !isFilmPlaying ?
        <MoviePageDetails
          film={activeMovie}
          moreLikeThisFilms={moreLikeThisFilms}
          isAuthorizationRequired = {isAuthorizationRequired}
          userData={userData}
          onOpenCloseFilm={onOpenCloseFilm}
        /> :
        <VideoPlayerBig movieWatch={activeMovie} onOpenCloseFilm={onOpenCloseFilm} />;
    }}
    />
  </Switch>;


};

const mapStateToProps = (state) => ({
  films: state.movies,
  isAuthorizationRequired: state.isAuthorizationRequired,
  userData: state.userData,
  selectedMovie: state.selectedMovie,
  promo: state.promo,
  isFilmPlaying: state.isFilmPlaying,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitSignIn: (email, password) => {
    dispatch(apiDispatcher.authorization(email, password));
  },
  onPostFavorite: (id, isFavorite, isPromo) => {
    dispatch(apiDispatcher.postFavorite(id, isFavorite, isPromo));
  },
  onOpenCloseFilm: (status) => {
    dispatch(ActionCreator.onOpenCloseFilm(status));
  },
});


App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    movieImg: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runtime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  })),
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  onPostFavorite: PropTypes.func.isRequired,
  onOpenCloseFilm: PropTypes.func,
  isFilmPlaying: PropTypes.bool.isRequired,
  promo: PropTypes.shape({
    movieTitle: PropTypes.string,
    movieImg: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    runtime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
