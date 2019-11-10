const ShowMore = ({onClick}) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={onClick}
    >Show more
    </button>
  </div>
);

ShowMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShowMore;
