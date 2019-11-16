import MovieCard from "../movie-card/movie-card";

import withMovieCard from "../../hocs/with-movie-card/with-movie-card";

const MovieCardWrapped = withMovieCard(MovieCard);

const MoviesList = (props) => {
  // const {films, onMovieClick} = props;
  const {films, onMouseEnter} = props;

  return (
    <div className="catalog__movies-list">

      {films.map((film) => (
        <MovieCardWrapped key={film.id}
          film={film}
          onMouseEnter={onMouseEnter}
          // onMovieClick={handleMouseEnter}
        />
      ))}

    </div>
  );
};

// MoviesList.propTypes = {
//   films: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         movieTitle: PropTypes.string.isRequired,
//         movieImg: PropTypes.string.isRequired
//       })
//   ).isRequired,
//   // onMovieClick: PropTypes.func.isRequired,
//   // onMoviePageClick: PropTypes.func,
//   onMouseEnter: PropTypes.func
// };

// class MoviesList extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activeCard: null,
//     };

//     this._handleMouseEnter = this._handleMouseEnter.bind(this);
//   }

//   render() {
//     const {films} = this.props;
//     return (
//       <div className="catalog__movies-list">

//         {films.map((film) => (
//           <MovieCardWrapped key={film.id}
//             film={film}
//             onMouseEnter={this._handleMouseEnter} />
//         ))}

//       </div>
//     );
//   }

//   _handleMouseEnter(filmData) {
//     this.setState({
//       activeCard: filmData,
//     });
//   }
// }

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        movieTitle: PropTypes.string.isRequired,
        movieImg: PropTypes.string.isRequired
      })
  ).isRequired,
  onMouseEnter: PropTypes.func
};

export default MoviesList;
