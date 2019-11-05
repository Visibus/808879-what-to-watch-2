class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.state = {isPlaying: props.playerState.isPlaying};
  }

  componentDidMount() {
    const video = this.videoRef.current;
    const {playerState} = this.props;

    if (video) {
      if (playerState.isPlaying) {
        video.play();
      }
    }
  }

  componentDidUpdate() {
    const {playerState, src} = this.props;
    const video = this.videoRef.current;

    if (video) {
      if (playerState.isPlaying) {
        video.src = src;
        video.play();
      } else {
        video.pause();
        video.src = src;
        // video.currentTime = 0;
        // video.load();
      }
    }
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    video.src = ``;
  }

  render() {
    const {src, poster, muted, width, height} = this.props;

    return <video
      src={src}
      poster={poster}
      muted={muted}
      width={width}
      height={height}
      ref={this.videoRef}
    />;
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  playerState: PropTypes.exact({
    isPlaying: PropTypes.bool
  }).isRequired
};

export default VideoPlayer;