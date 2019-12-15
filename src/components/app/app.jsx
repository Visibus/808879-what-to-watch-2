import MainPage from "../main-page/main-page";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {connect} from "react-redux";
import apiDispatcher from "../../reducer/api-dispatcher/api-dispatcher";
import ActionCreator from "../../reducer/actions/actions";
import SignIn from "../../components/sign-in/sign-in";
import {Switch, Route} from "react-router-dom";
import VideoPlayerBig from "../../components/video-player-big/video-player-big";
import withAuth from "../../hocs/with-auth/with-auth";
import AddReview from "../add-review/add-review";
import WatchList from "../watch-list/watch-list";
import withFormSubmit from "../../hocs/with-form-submit/with-form-submit";
import {filmsTypes, userDataTypes, commentsTypes, promoMovieTypes} from "../../types/types";
import NotFound from "../not-found/not-found";

const App = (props) => {
  const {films, isAuthorizationRequired, onSubmitSignIn, userData, promo, onPostFavorite, isFilmPlaying,
    onOpenCloseFilm, comments, onLoadComments, onChangeSelectedMovie, idSelectedMovie, onLoadFavorites, isFavoriteActually,
    favorites, history, errorLogin} = props;

  return <Switch>
    <Route path="/" exact render={() => {
      return !isFilmPlaying ?
        <MainPage
          films={films}
          isAuthorizationRequired={isAuthorizationRequired}
          userData={userData}
          promo = {promo}
          onChangeSelectedMovie
          onPostFavorite={onPostFavorite}
          onOpenCloseFilm={onOpenCloseFilm}
          history={history}
        /> :
        <VideoPlayerBig movieWatch={promo} onOpenCloseFilm={onOpenCloseFilm} />;
    }}
    />
    <Route path="/login" exact render={() => {
      return <SignIn
        onSubmitSignIn={onSubmitSignIn}
        isAuthorizationRequired={isAuthorizationRequired}
        errorLogin={errorLogin}
      />;
    }}
    />
    <Route path="/films/:id" exact render={(propsMovie) => {

      const id = parseInt(propsMovie.match.params.id, 10);
      onChangeSelectedMovie(id);
      if ((idSelectedMovie !== id) || (comments === null)) {
        onLoadComments(id);
      }

      const activeMovie = films.find((film)=> +film.id === +idSelectedMovie);
      const moreLikeThisFilms = films.filter((film) => film.genre === activeMovie.genre && film.id !== activeMovie.id).slice(0, 4);
      return !isFilmPlaying ?
        <MoviePageDetails
          film={activeMovie}
          moreLikeThisFilms={moreLikeThisFilms}
          isAuthorizationRequired = {isAuthorizationRequired}
          userData={userData}
          onPostFavorite={onPostFavorite}
          onOpenCloseFilm={onOpenCloseFilm}
          comments={comments || []}
          history={history}
        /> :
        <VideoPlayerBig movieWatch={activeMovie} onOpenCloseFilm={onOpenCloseFilm} />;
    }}
    />
    <Route path="/film/:id/review" exact render={(propsMovie) => {
      const id = parseInt(propsMovie.match.params.id, 10);
      onChangeSelectedMovie(id);
      const AddReviewWrapped = withAuth(withFormSubmit(AddReview));
      return <AddReviewWrapped
        {...propsMovie}
        isAuthorizationRequired={isAuthorizationRequired}
        films={films}
        userData={userData}
        id={id}
        history={history}
      />;
    }}
    />
    <Route path="/mylist" exact render={() => {
      const WatchListWrapped = withAuth(WatchList);
      if (!isFavoriteActually) {
        onLoadFavorites();
      }
      return <WatchListWrapped
        isAuthorizationRequired={isAuthorizationRequired}
        userData={userData}
        films={favorites}
        onOpenCloseFilm={onOpenCloseFilm}
      />;
    }}
    />
    <Route render={() => {
      return <NotFound />;
    }}
    />
  </Switch>;


};

const mapStateToProps = (state) => ({
  films: state.movies,
  isAuthorizationRequired: state.isAuthorizationRequired,
  userData: state.userData,
  promo: state.promo,
  isFilmPlaying: state.isFilmPlaying,
  comments: state.comments,
  idSelectedMovie: state.idSelectedMovie,
  isFavoriteActually: state.isFavoriteActually,
  favorites: state.favorites,
  errorLogin: state.errorLogin,
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
  onLoadComments: (id) => {
    dispatch(apiDispatcher.loadComments(id));
  },
  onChangeSelectedMovie: (id) => {
    dispatch(ActionCreator.changeSelectedMovie(id));
  },

  onLoadFavorites: () => {
    dispatch(apiDispatcher.loadFavoriteMovies());
  },
});


App.propTypes = {
  films: filmsTypes,
  userData: userDataTypes,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
  onPostFavorite: PropTypes.func.isRequired,
  onOpenCloseFilm: PropTypes.func,
  isFilmPlaying: PropTypes.bool.isRequired,
  idSelectedMovie: PropTypes.number.isRequired,
  onChangeSelectedMovie: PropTypes.func.isRequired,
  promo: promoMovieTypes,
  comments: commentsTypes,
  onLoadComments: PropTypes.func,
  onLoadFavorites: PropTypes.func.isRequired,
  isFavoriteActually: PropTypes.bool.isRequired,
  favorites: filmsTypes,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  errorLogin: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
