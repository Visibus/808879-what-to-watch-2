import {movieRating, formatRating} from "..//../helpers/helpers";
import {filmTypes} from "../../types/types";

const TabOverView = (props) => {
  const {currentTab, indexTab, film} = props;

  if (currentTab === indexTab) {
    return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{formatRating(film.rating)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{movieRating(film.rating)}</span>
          <span className="movie-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and other</strong></p>
      </div>

    </>
    );
  }

  return null;
};

TabOverView.propTypes = {
  film: filmTypes,
  currentTab: PropTypes.string.isRequired,
  indexTab: PropTypes.string.isRequired,
};

export default TabOverView;
