import {formatRuntime} from "..//../helpers/helpers";
import {filmTypes} from "../../types/types";

const TabDetails = (props) => {
  const {currentTab, indexTab, film} = props;

  if (currentTab === indexTab) {
    return (
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.starring.join(`,\n`)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{formatRuntime(film.runtime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

TabDetails.propTypes = {
  film: filmTypes,
  currentTab: PropTypes.string.isRequired,
  indexTab: PropTypes.string.isRequired,
};

export default TabDetails;
