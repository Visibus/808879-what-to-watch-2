import VideoPlayer from "../video-player/video-player";
import withMovieCard from "../../hocs/with-movie-card/with-movie-card";
import {Link} from "react-router-dom";
import {WIDTH_PLAYER_PREVIEW, HEIGHT_PLAYER_PREVIEW} from "../../helpers/helpers";

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
      <Link to={`/films/${id}`}>
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewVideoLink}
            poster={previewImage}
            muted={true}
            width={WIDTH_PLAYER_PREVIEW}
            height={HEIGHT_PLAYER_PREVIEW}
            isPlaying={isPlaying}
          />
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} onClick={onTitleClick} className="small-movie-card__link">{movieTitle}</Link>
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
