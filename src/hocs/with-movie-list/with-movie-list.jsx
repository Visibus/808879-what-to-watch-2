const withMovieList = (Component) => {
  class WithMovieList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };
      this.handleMouseEnter = this.handleMouseEnter.bind(this);

    }

    handleMouseEnter(props) {
      this.setState({
        activeCard: props.id,
      });

    }

    render() {
      return <Component
        {...this.props}
        onMouseEnter={this.handleMouseEnter}
      />;
    }
  }

  WithMovieList.propTypes = {};

  return WithMovieList;
};

export default withMovieList;
