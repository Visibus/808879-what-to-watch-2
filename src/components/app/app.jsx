import PropTypes from "prop-types";
import MainPage from "../mainPage/main-page";

const App = (props) => {
  const {films} = props;

  return <MainPage
    films = {films}
  />;
};


App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    movieImg: PropTypes.string.isRequired,
  })),
};

export default App;
