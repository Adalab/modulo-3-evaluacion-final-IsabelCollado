import { useRef, useState } from 'react';
import music from '../audio/ringtones-harry-potter.mp3';

const Audio = () => {
  const [muted, setMuted] = useState(false);
  const audio = useRef();

  const handleMuteOff = () => {
    audio.current.muted = true;
    setMuted(true);
  };
  const handleMuteOn = () => {
    audio.current.muted = false;
    setMuted(false);
  };

  return (
    <>
      <i
        className={muted ? 'hidden' : 'fa-sharp fa-solid fa-volume-xmark'}
        onClick={handleMuteOff}
      ></i>
      <i
        className={!muted ? 'hidden' : 'fa-solid fa-volume-high'}
        onClick={handleMuteOn}
      ></i>
      <audio
        id="landing__audio"
        ref={audio}
        className="landing__audio"
        autoPlay
        loop
        preload="auto"
      >
        <source type="audio/mp3" src={music} />
        Your browser does not support the audio element
      </audio>
    </>
  );
};
export default Audio;
