const TAB_OVERVIEW = `Overview`;
const TAB_DETAILS = `Details`;
const TAB_REVIEWS = `Reviews`;

const formatRuntime = (runTime) => {
  const h = Math.floor(runTime / 60);
  const m = runTime - h * 60;

  return `${h}h ${m}m`;
};

const movieRating = (rating) => {
  if (rating < 3.0) {
    return `Bad`;
  }
  if (rating < 5.0) {
    return `Normal`;
  }
  if (rating < 8.0) {
    return `Good`;
  }
  if (rating < 10.0) {
    return `Very good`;
  }
  return `Awesome`;
};

const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat(`en`, {
    month: `long`,
    day: `numeric`,
    year: `numeric`,
  });
  return formatter.format(new Date(date));
};

const convertToISODate = (date) => {

  return new Date(date).toISOString();
};

const formatRating = (rating) => {
  const formatter = new Intl.NumberFormat(navigator.language, {minimumFractionDigits: 1});
  return formatter.format(rating);
};

const tabs = [TAB_OVERVIEW, TAB_DETAILS, TAB_REVIEWS];

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: TAB_DETAILS,
    };
  }

  render() {
    const {currentTab} = this.state;
    return (
      <>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab) => (
              <li key={tab}
                className={`movie-nav__item${tab === currentTab ? ` movie-nav__item--active` : ``}`}>
                <a href="#"
                  className="movie-nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    this._selectTab(tab);
                  }}>

                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {this._tabContent}

      </>
    );
  }

  get _tabContent() {
    const {currentTab} = this.state;
    switch (currentTab) {
      case TAB_OVERVIEW:
        return this._overviewTabContent;
      case TAB_DETAILS:
        return this._detailsTabContent;
      case TAB_REVIEWS:
        return this._reviewsTabContent;
    }
    return null;
  }

  get _overviewTabContent() {
    const {film} = this.props;
    const {
      rating,
      scoresCount,
      description,
      director,
      starring
    } = film;

    return (
      <>
        <div className="movie-rating">
          <div className="movie-rating__score">{formatRating(rating)}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{movieRating(rating)}</span>
            <span className="movie-rating__count">{scoresCount} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{description}</p>

          <p className="movie-card__director"><strong>Director: {director}</strong></p>

          <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
        </div>

      </>
    );
  }

  get _detailsTabContent() {
    const {
      genre,
      released,
      director,
      starring,
      runtime,
    } = this.props.film;

    return (
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((it, idx) => {
                const notLast = idx < starring.length - 1;
                const coma = notLast ? `,` : ``;
                const br = notLast ? <br/> : null;
                return <div key={idx}>{it + coma}{br}</div>;
              })}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{formatRuntime(runtime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    );
  }

  get _reviewsTabContent() {
    const {reviews} = this.props.film;

    return (
      <div className="movie-card__reviews movie-card__row">

        <div className="movie-card__reviews-col">
          {this._getReviewsColumnContent(reviews.filter((el, idx) => idx % 2 === 0))}
        </div>
        <div className="movie-card__reviews-col">
          {this._getReviewsColumnContent(reviews.filter((el, idx) => idx % 2 === 1))}
        </div>

      </div>
    );
  }

  _getReviewsColumnContent(reviews) {
    return reviews.map(({id, comment, user, date, rating}, idx) => (
      <div key={id}
        className="review"
        style={{borderBottom: (idx < reviews.length - 1) ? `2px solid rgba(255,255,255,.24)` : `none`}}>
        <blockquote className="review__quote">
          <p className="review__text">
            {comment}
          </p>
          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime={convertToISODate(date)}>
              {formatDate(date)}
            </time>
          </footer>
        </blockquote>

        <div className="review__rating">{formatRating(rating)}</div>
      </div>
    ));
  }

  _selectTab(tab) {
    this.setState({
      currentTab: tab,
    });
  }

}

const filmPropType = {
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number,
  movieImg: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runtime: PropTypes.number.isRequired,
};

Tabs.propTypes = {
  film: PropTypes.shape(filmPropType),
};


export default Tabs;
