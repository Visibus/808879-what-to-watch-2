import GenreList from "./genre-list";

it(`renders correctly`, () => {
  const tree = window.renderer
    .create(<GenreList
      selectedGenre={`Comedy`}
      genres={[`Adventure`, `Drama`]}
      onSelect={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
