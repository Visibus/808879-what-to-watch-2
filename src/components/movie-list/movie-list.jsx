import MovieCard from "../movie-card/movie-card";

import withMovieList from "../../hocs/with-movie-list/with-movie-list";

const MoviesList = (props) => {
  const {films, onClick} = props;

  return (
    <div className="catalog__movies-list">

      {films.map((film) => (
        <MovieCard key={film.id}
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

export default withMovieList(MoviesList);
