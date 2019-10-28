import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../movie-card/movie-card";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">

        {films.map((film) => (
          <MovieCard key={film.id}
            film={film}
            onMouseEnter={this._handleMouseEnter} />
        ))}

      </div>
    );
  }

  _handleMouseEnter(filmData) {
    this.setState({
      activeCard: filmData,
    });
  }
}

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
