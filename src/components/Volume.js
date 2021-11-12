import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Volume = ({ volume, audioEl }) => {
  return (
    <>
      <FontAwesomeIcon icon={faVolumeUp} />
      <div className="volumeSlider">
        <input
          className="volume"
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={(e) => {
            audioEl.current.volume = e.target.value;
          }}
        />
      </div>
    </>
  );
};

export default Volume;
