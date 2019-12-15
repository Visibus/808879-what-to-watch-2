import {VideoPlayerBig} from "../video-player-big/video-player-big";
import films from "../../mocks/films";

describe(`BigPlayer`, () => {
  it(`VideoPlayerBig renders correctly`, () => {
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
              movieWatch={films[0]}
              isLoading={false}
              isFullscreen={false}
            />
        )
        .toJSON();
    expect(component).toMatchSnapshot();
  });
});
