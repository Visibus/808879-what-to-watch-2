import PropTypes from "prop-types";
import MainPage from "../mainPage/main-page";

const App = (props) => {
  const {movieNames} = props;

  return <MainPage
    movieNames = {movieNames}
  />;
};

App.propTypes = {movieNames: PropTypes.arrayOf(PropTypes.string).isRequired};

export default App;
