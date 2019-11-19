import MainPage from "../main-page/main-page";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {connect} from 'react-redux';


const App = (props) => {
  const {films = []} = props;

  switch (location.pathname) {
    case `/`:
      return <MainPage
        films = {films}
      />;
    case `/details`:
      if (!films.length) {
        return null;
      }
      const id = parseInt(location.hash.slice(1), 10);
      const activeMovie = films.find((film)=> +film.id === +id);
      return <MoviePageDetails film={activeMovie} />;
  }
  return null;
};

const mapStateToProps = (state) => ({
  films: state.movies,
});

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    movieImg: PropTypes.string.isRequired,
  })),
};

export default connect(mapStateToProps)(App);
