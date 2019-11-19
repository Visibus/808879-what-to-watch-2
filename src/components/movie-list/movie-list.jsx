import MovieCard from "../movie-card/movie-card";

import withMovieCard from "../../hocs/with-movie-card/with-movie-card";

const MovieCardWrapped = withMovieCard(MovieCard);

const MoviesList = (props) => {
  const {films, onClick} = props;

  return (
    <div className="catalog__movies-list">

      {films.map((film) => (
        <MovieCardWrapped key={film.id}
          film={film}
          onClick={onClick}
        />
      ))}

    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        movieTitle: PropTypes.string.isRequired,
        movieImg: PropTypes.string.isRequired
      })
  ).isRequired,
  onMouseEnter: PropTypes.func,
  onClick: PropTypes.func,
};

export default MoviesList;
