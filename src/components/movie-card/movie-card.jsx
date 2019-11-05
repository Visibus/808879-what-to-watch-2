import VideoPlayer from "../video-player/video-player";

class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.timerId = null;
    this.DELAY = 1000;

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
    this._handleMovieCardEnter = this._handleMovieCardEnter.bind(this);
    this._handleMovieCardLeave = this._handleMovieCardLeave.bind(this);
  }


  _handleMovieCardClick() {
    const {id} = this.props.film;
    const {onMouseEnter} = this.props;

    const movieUrl = `/details#${id}`;
    location.assign(movieUrl);
    onMouseEnter(this.props.film);
  }

  _handleMovieCardEnter() {
    this.timerId = setTimeout(() => {
      this.setState({isPlaying: true});
    }, this.DELAY);
  }

  _handleMovieCardLeave() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.setState({isPlaying: false});
    }
  }

  render() {
    const {film, onTitleClick} = this.props;
    const {movieTitle, movieImg, previewVideoLink, id} = film;
    return (
      <article className="small-movie-card catalog__movies-card"
        onClick = {this._handleMovieCardClick}
        onMouseEnter={this._handleMovieCardEnter}
        onMouseLeave={this._handleMovieCardLeave}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewVideoLink}
            poster={movieImg}
            muted={true}
            width={280}
            height={175}
            playerState={this.state}
          />

        </div>
        <h3 className="small-movie-card__title">
          <a onClick={onTitleClick} className="small-movie-card__link" href={`/details#${id}`}>{movieTitle}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    movieTitle: PropTypes.string.isRequired,
    movieImg: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onClick: PropTypes.func,
};

export default MovieCard;
