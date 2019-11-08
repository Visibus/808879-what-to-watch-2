const GenreList = ({genres, selectedGenre, onSelect}) => (
  <ul className="catalog__genres-list">
    {genres.map((genre) => (
      <li
        key={genre}
        className={`catalog__genres-item ${genre === selectedGenre ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => onSelect(evt, genre)}>{genre}</a>
      </li>
    ))}
  </ul>
);

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default GenreList;
