import {MOVIE_ALL_GENTRES} from "../../helpers/helpers";
import {createSelector} from "reselect";

const getSelectedGenre = (state) => {
  return state.selectedGenre;
};

const getUniqueGenres = (state) => {
  const genres = state.movies.map((it) => it.genre);
  return [MOVIE_ALL_GENTRES, ...new Set(genres)];
};

const getMovies = (state) => {
  return state.movies;
};

const getAmountsCardsShow = (state) => {
  return state.amountCardsShow;
};

const getFilteredMovies = createSelector(
    getMovies,
    getSelectedGenre,
    (array, filter) =>
      filter === MOVIE_ALL_GENTRES ?
        array : array.filter((it) => it.genre === filter)
);

const getAllowedAmountOfCards = createSelector(
    getFilteredMovies,
    getAmountsCardsShow,
    (array, cardsAmount) => array.slice(0, cardsAmount)
);


const existsMoviesLeftToShow = createSelector(
    getFilteredMovies,
    getAmountsCardsShow,
    (movieAmount, cardsAmounts) => movieAmount.length > cardsAmounts
);


export {getSelectedGenre, getUniqueGenres, getAllowedAmountOfCards, existsMoviesLeftToShow};
