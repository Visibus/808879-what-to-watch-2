import MainPage from "../main-page/main-page";
import MoviePageDetails from "../movie-page-details/movie-page-details";


const App = (props) => {
  const {films} = props;
  switch (location.pathname) {
    case `/`:
      return <MainPage
        films = {films}
      />;
    case `/details`:
      const id = parseInt(location.hash.slice(1), 10);
      const film = films.find((it) => it.id === id);
      return <MoviePageDetails film={film} />;
  }
  return null;
};


App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    movieImg: PropTypes.string.isRequired,
  })),
};

export default App;
