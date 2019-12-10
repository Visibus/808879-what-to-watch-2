class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this.videoRef.current;
    const {isPlaying} = this.props;

    if (video) {
      if (isPlaying) {
        video.play();
      }
    }
  }

  componentDidUpdate() {
    const {isPlaying, src} = this.props;
    const video = this.videoRef.current;

    if (video) {
      if (isPlaying) {
        video.play();
      } else {
        video.pause();
        video.src = src;
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
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
