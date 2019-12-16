import {formatDate, convertToISODate, formatRating} from "..//../helpers/helpers";
import {commentsTypes} from "../../types/types";
import moment from "moment";

const TabReviews = (props) => {
  const {currentTab, indexTab, comments} = props;
  const commentsSorted = comments.sort((a, b) => moment(b.date) - moment(a.date));

  const commentsLeftColumn = [];
  const commentsRightColumn = [];
  commentsSorted.forEach((it, i) => {
    if (i % 2 === 0) {
      commentsLeftColumn.push(it);
    } else {
      commentsRightColumn.push(it);
    }
  });
  if (currentTab === indexTab) {
    return (
      <article className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {commentsLeftColumn.map((it) => {
            return <div className="review" key={it.id}>
              <blockquote className="review__quote">
                <p className="review__text">
                  {it.comment}
                </p>

                <footer className="review__details">
                  <cite className="review__author">{it.user.name}</cite>
                  <time className="review__date" dateTime={convertToISODate(it.date)}>
                    {formatDate(it.date)}
                  </time>
                </footer>
              </blockquote>
              <div className="review__rating">{formatRating(it.rating)}</div>
            </div>;
          })}
        </div>
        <div className="movie-card__reviews-col">
          {commentsRightColumn.map((it) => {
            return <div className="review" key={it.id}>
              <blockquote className="review__quote">
                <p className="review__text">
                  {it.comment}
                </p>

                <footer className="review__details">
                  <cite className="review__author">{it.user.name}</cite>
                  <time className="review__date" dateTime={convertToISODate(it.date)}>
                    {formatDate(it.date)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{formatRating(it.rating)}</div>
            </div>;
          })}
        </div>
      </article>
    );
  }
  return null;
};

TabReviews.propTypes = {
  comments: commentsTypes,
  currentTab: PropTypes.string.isRequired,
  indexTab: PropTypes.string.isRequired,

};

export default TabReviews;
