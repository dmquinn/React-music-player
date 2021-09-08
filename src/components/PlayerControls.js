import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls({ SkipSong, setIsPlaying, isPlaying }) {
  return (
    <div className="controls">
      <button className="skip" onClick={() => SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="play" onClick={() => setIsPlaying(!isPlaying)}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip" onClick={() => SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default Controls;
