const withMovieCard = (Component) => {
  class WithMovieCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.timerId = null;
      this.DELAY = 1000;

      this.handleMovieCardEnter = this.handleMovieCardEnter.bind(this);
      this.handleMovieCardLeave = this.handleMovieCardLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this.timerId);
    }

    handleMovieCardEnter() {
      this.timerId = setTimeout(() => {
        this.setState({isPlaying: true});
      }, this.DELAY);
    }

    handleMovieCardLeave() {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.setState({isPlaying: false});
      }
    }

    render() {
      return <Component
        {...this.props}
        onMovieEnter={this.handleMovieCardEnter}
        onMovieLeave={this.handleMovieCardLeave}
        isPlaying={this.state.isPlaying}
      />;
    }
  }

  WithMovieCard.propTypes = {};

  return WithMovieCard;
};

export default withMovieCard;
