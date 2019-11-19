const withMovieList = (Component) => {
  class WithMovieList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };
      this.handleClick = this.handleClick.bind(this);

    }

    handleClick(activeMovie) {
      location.assign(`/details#${activeMovie.id}`);
    }

    render() {
      return <Component
        {...this.props}
        onClick={this.handleClick}
      />;
    }
  }
  WithMovieList.propTypes = {};

  return WithMovieList;

};


export default withMovieList;
