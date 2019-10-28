import Proptypes from "prop-types";

const MovieCard = (props) => {
  const {film, onTitleClick, onMouseEnter} = props;
  const {movieTitle, movieImg} = film;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(film)}>
      <div className="small-movie-card__image">
        <img src={movieImg} alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onTitleClick} className="small-movie-card__link" href="movie-page.html">{movieTitle}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: Proptypes.shape({
    id: Proptypes.number.isRequired,
    movieTitle: Proptypes.string.isRequired,
    movieImg: Proptypes.string.isRequired
  }).isRequired,
  onTitleClick: Proptypes.func,
  onMouseEnter: Proptypes.func,
};

export default MovieCard;
