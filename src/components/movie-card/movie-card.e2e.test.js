import MovieCard from "./movie-card";

it(`MovieCard correct run afrer click and mouseEnter`, () => {
  const onClick = jest.fn();
  const onMouseEnter = jest.fn();
  const films = {id: 1, movieTitle: `Macbeth`, previewImage: ``, previewVideoLink: ``};
  const screen = window.shallow(
      <MovieCard
        film = {films}
        onHeaderClick = {onClick}
        onMouseEnter={onMouseEnter}/>);
  const headers = screen.find(`.small-movie-card catalog__movies-card`);
  headers.forEach((header) => {
    header.simulate(`click`);
    expect(onClick).toHaveBeenCalledTimes(1);
    header.simulate(`mouseEnter`, {
      preventDefault: () => {
      },
      target: {
        value: films
      }
    });
    expect(onMouseEnter.toHaveBeenCalledTimes(1));
    expect(onMouseEnter.toHaveBeenCalledWith(films));
  });
});
