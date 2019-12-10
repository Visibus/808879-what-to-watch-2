import VideoPlayerBig from "../video-player-big/video-player-big";

describe(`BigPlayer`, () => {
  it(`VideoPlayerLarge renders correctly`, () => {
    const mockRef = React.createRef();
    const component = window.renderer
        .create(
            <VideoPlayerBig
              videoRef={mockRef}
              isPlaying={false}
              progress={0}
              runTime={0}
              onPlayButtonClick={jest.fn()}
              onFullScreenButtonClick={jest.fn()}
              onOpenCloseFilm={jest.fn()}
              movieWatch={{
                videoLink: ``,
                previewImage: ``,
                movieTitle: ``
              }}
            />
        )
        .toJSON();
    expect(component).toMatchSnapshot();
  });
});
