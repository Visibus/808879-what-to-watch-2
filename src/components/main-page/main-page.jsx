import MoviesList from "../movie-list/movie-list";
import GenreList from "../genre-list/genre-list";
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import {getUniqueGenres, getSelectedGenre, getAllowedAmountOfCards, areMoviesLeftToShow} from '../../selectors';
import ShowMore from '../show-more/show-more';

import withMovieList from "../../hocs/with-movie-list/with-movie-list";

const MoviesListWrapped = withMovieList(MoviesList);

const MORE_CARDS_TO_SHOW_AMOUNT = 20;

const MainPage = (props) => {
  const {films, genres, selectedGenre, onGenreSelect, isShowMoreVisible, onShowMoreClick} = props;
  return (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={onGenreSelect}
          />

          <MoviesListWrapped
            films={films}
          />
          {isShowMoreVisible && <ShowMore onClick={onShowMoreClick}/>}
          {/* <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div> */}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

const mapStateToProps = (state) => ({
  selectedGenre: getSelectedGenre(state),
  films: getAllowedAmountOfCards(state),
  genres: getUniqueGenres(state),
  isShowMoreVisible: areMoviesLeftToShow(state)
  // isShowMoreVisible: state.movies.length > state.amountCardsShow,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect: (evt, genre) => {
    evt.preventDefault();
    dispatch(ActionCreator.setSelectedGenre(genre));
    dispatch(ActionCreator.resetShownCards());
  },
  onShowMoreClick: () => dispatch(ActionCreator.setCardsShownAmount(MORE_CARDS_TO_SHOW_AMOUNT)),
});


MainPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    movieTitle: PropTypes.string.isRequired,
    movieImg: PropTypes.string.isRequired,
  })),
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onGenreSelect: PropTypes.func.isRequired,
  isShowMoreVisible: PropTypes.bool.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
