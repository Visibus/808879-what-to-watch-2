import TabDetails from "../../components/tab-details/tab-details";
import TabOverview from "../../components/tab-overview/tab-overview";
import TabReviews from "../../components/tab-reviews/tab-reviews";
import withTabs from "../../hocs/with-tabs/with-tabs";
import {filmTypes, commentsTypes} from "../../types/types";

const TAB_OVERVIEW = `Overview`;
const TAB_DETAILS = `Details`;
const TAB_REVIEWS = `Reviews`;

const TABS_MOVIE = [TAB_OVERVIEW, TAB_DETAILS, TAB_REVIEWS];


const Tabs = (props) => {
  const {film, comments, onMouseClickChild, currentTab} = props;

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TABS_MOVIE.map((tab) => (
            <li key={tab}
              className={`movie-nav__item${tab === currentTab ? ` movie-nav__item--active` : ``}`}>
              <a href="#"
                className="movie-nav__link"
                onClick={(e) => {
                  e.preventDefault();
                  onMouseClickChild(tab);
                }}>
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <TabOverview currentTab={currentTab} indexTab={TAB_OVERVIEW} film={film} />
      <TabDetails currentTab={currentTab} indexTab={TAB_DETAILS} film={film} />
      <TabReviews currentTab={currentTab} indexTab={TAB_REVIEWS} comments={comments} />
    </>
  );
};

Tabs.propTypes = {
  film: filmTypes,
  comments: commentsTypes,
  onMouseClickChild: PropTypes.func,
  currentTab: PropTypes.string,
};


export default withTabs(Tabs);
