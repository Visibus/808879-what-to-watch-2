import MoviesList from "../movie-list/movie-list";
import {Link} from "react-router-dom";
import {filmsTypes, userDataTypes} from "../../types/types";

const WatchList = (props) => {
  const {isAuthorizationRequired, userData, films} = props;

  return <>
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <Link className="logo__link" to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <h1 className="page-title user-page__title">My list</h1>

      {isAuthorizationRequired ?
        <div className="user-block">
          <Link to={`/login`} className="user-block__link">Sign in</Link>
        </div>
        :
        <div className="user-block">
          <Link to={`/mylist`}>
            <div className="user-block__avatar">
              <img src={`https://htmlacademy-react-2.appspot.com${userData.avatarUrl}`} alt="User avatar" width="63" height="63" />
            </div>
          </Link>
        </div>
      }
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MoviesList films={films} />
    </section>
  </div>
  </>;
};

WatchList.propTypes = {
  films: filmsTypes,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  userData: userDataTypes,
};
export default WatchList;
