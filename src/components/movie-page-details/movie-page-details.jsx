import Tabs from "../tabs/tabs";
import MoviesList from "../movie-list/movie-list";
import {Link} from "react-router-dom";
import {userDataTypes, commentsTypes} from "../../types/types";
import {AXIOS_SETTINGS} from "../../helpers/helpers";


const MoviePageDetails = (props) => {
  const {film, moreLikeThisFilms, isAuthorizationRequired, userData, onOpenCloseFilm, comments, onPostFavorite, history} = props;
  const {
    backgroundColor,
    backgroundImage,
    movieTitle,
    genre,
    released,
    movieImg
  } = props.film;
  return (
    <div>
      <section className="movie-card movie-card--full" style={{backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={movieTitle} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link className="logo__link" to="/">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            {isAuthorizationRequired ?
              <div className="user-block">
                <Link to={`/login`} className="user-block__link">Sign in</Link>
              </div>
              :
              <div className="user-block">
                <Link to={`/mylist`}>
                  <div className="user-block__avatar">
                    <img src={`${AXIOS_SETTINGS.BASE_URL_AVATAR}${userData.avatarUrl}`} alt="User avatar" width="63" height="63" />
                  </div>
                </Link>
              </div>
            }

          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movieTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                  onOpenCloseFilm(true);
                }}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {
                  film.isFavorite ?
                    <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                      if (!isAuthorizationRequired) {
                        onPostFavorite(film.id, film.isFavorite, false);
                      } else {
                        history.push(`/login`);
                      }
                    }}>
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg>
                      <span>My list</span>
                    </button>
                    : <button className="btn btn--list movie-card__button" type="button" onClick={() => {
                      if (!isAuthorizationRequired) {
                        onPostFavorite(film.id, film.isFavorite, false);
                      } else {
                        history.push(`/login`);
                      }
                    }}>
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                      <span>My list</span>
                    </button>
                }
                {!isAuthorizationRequired && <Link to={`/film/${film.id}/review`} className="btn movie-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movieImg} alt={`${movieTitle} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs film={film} comments = {comments} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          {moreLikeThisFilms.length > 0 && <>
          <h2 className="catalog__title">More like this</h2>
          <MoviesList films={moreLikeThisFilms} />
        </>}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="/" className="logo__link logo__link--light">
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
    </div>
  );
};

const filmPropType = {
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number,
  movieImg: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runtime: PropTypes.number.isRequired,
};

MoviePageDetails.defaultProps = {
  moreLikeThisFilms: [],
};

MoviePageDetails.propTypes = {
  film: PropTypes.shape(filmPropType),
  moreLikeThisFilms: PropTypes.arrayOf(PropTypes.shape(filmPropType)),
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onOpenCloseFilm: PropTypes.func,
  userData: userDataTypes,
  comments: commentsTypes,
  onPostFavorite: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
};


export default MoviePageDetails;
