import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

it(`Is video player rendered`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src={``}
      poster={`img/`}
      muted={true}
      width={280}
      height={175}
      playerState={{}}
    />);

  expect(tree).toMatchSnapshot();
});
