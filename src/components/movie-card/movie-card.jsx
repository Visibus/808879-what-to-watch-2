import VideoPlayer from "../video-player/video-player";
import withMovieCard from "../../hocs/with-movie-card/with-movie-card";

const MovieCard = (props) => {

  const {film, onTitleClick, onMovieEnter, onMovieLeave, isPlaying} = props;
  const {movieTitle, previewVideoLink, previewImage, id} = film;

  const handleMovieCardClick = (evt) => {
    const {onClick} = props;
    evt.preventDefault();
    onClick(props.film);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onClick = {handleMovieCardClick}
      onMouseEnter={onMovieEnter}
      onMouseLeave={onMovieLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          src={previewVideoLink}
          poster={previewImage}
          muted={true}
          width={280}
          height={175}
          isPlaying={isPlaying}
        />

      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onTitleClick} className="small-movie-card__link" href={`/details#${id}`}>{movieTitle}</a>
      </h3>
    </article>
  );

};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    movieTitle: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onClick: PropTypes.func,
  onMovieEnter: PropTypes.func,
  onMovieLeave: PropTypes.func,
  isPlaying: PropTypes.bool
};

export default withMovieCard(MovieCard);
