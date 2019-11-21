const withMovieList = (Component) =>
  class WithMovieList extends React.PureComponent {
    static get propTypes() {
    }

    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };
      this.handleClick = this.handleClick.bind(this);

    }

    handleClick(activeMovie) {
      this.setState({activeCard: activeMovie});
      location.assign(`/details#${activeMovie.id}`);
    }

    render() {
      return <Component
        {...this.props}
        onClick={this.handleClick}
      />;
    }

  };


export default withMovieList;
