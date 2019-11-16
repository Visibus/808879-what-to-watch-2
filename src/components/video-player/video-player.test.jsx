import VideoPlayer from "./video-player";

it(`Is video player rendered`, () => {
  const tree = window.renderer
    .create(<VideoPlayer
      src={``}
      poster={`img/`}
      muted={true}
      width={280}
      height={175}
      isPlaying={{}}
    />);

  expect(tree).toMatchSnapshot();
});
