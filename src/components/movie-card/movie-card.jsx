import Proptypes from "prop-types";

const MovieCard = (props) => {
  const {film, onTitleClick, onMouseEnter} = props;
  const {movieTitle, movieImg, id} = film;
  const movieUrl = `/details#${id}`;

  const handleMovieCardClick = () => {
    location.assign(movieUrl);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(film)}
      onClick = {handleMovieCardClick}>
      <div className="small-movie-card__image">
        <img src={movieImg} alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onTitleClick} className="small-movie-card__link" href={movieUrl}>{movieTitle}</a>
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
  onClick: Proptypes.func,
};

export default MovieCard;
