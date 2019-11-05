import VideoPlayer from "./video-player";

describe(`testing play/pause`, () => {
  it(`Video pause`, () => {
    // const videoPlayer = window.mount(<VideoPlayer src={`src`} poster={`poster`} isPlaying={false} />);
    const player = window.mount(<VideoPlayer
      src={``}
      poster={``}
      muted={true}
      width={280}
      height={175}
      playerState={{isPlaying: false}}
    />);
    window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
    window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
    window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
    expect(player.state(`isPlaying`)).toEqual(false);

    player.setState({isPlaying: true});

    expect(player.state(`isPlaying`)).toEqual(true);
  });

  it(`Video play`, () => {
    // const videoPlayer = window.mount(<VideoPlayer src={`src`} poster={`poster`} isPlaying={true} />);
    const player = window.mount(<VideoPlayer
      src={``}
      poster={``}
      muted={true}
      width={280}
      height={175}
      playerState={{isPlaying: true}}
    />);
    window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
    window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
    window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };

    expect(player.state(`isPlaying`)).toEqual(true);

    player.setState({isPlaying: false});

    expect(player.state(`isPlaying`)).toEqual(false);
  });
});


// it(`VideoPlayer has pause and play state`, () => {
//   const player = window.mount(<VideoPlayer
//     src={``}
//     poster={``}
//     muted={true}
//     width={280}
//     height={175}
//     playerState={{isPlaying: false}}
//   />);
//   window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
//   window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
//   window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
//   // expect(player.state().isPlaying).toBe(false);

//   // player.setProps({playerState: {isPlaying: true}});
//   // expect(player.state().isPlaying).toBe(true);
//   expect(player.state(`isPlaying`)).toEqual(false);

//   player.setState({isPlaying: true});

//   expect(player.state(`isPlaying`)).toEqual(true);
// });
