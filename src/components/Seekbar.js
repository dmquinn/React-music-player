import React from "react";
import Volume from "./Volume";


const SeekBar = ({ duration, time, audioEl, volume }) => {
  return (
    <div>
      <div className="player-controls">
        <span>
          {Math.floor(time / 60)}:{Math.floor(time % 60)}
        </span>
        <div className="timeInput">
          <input
            className="progress"
            type="range"
            min={0}
            max={duration}
            value={time}
            onChange={(e) => {
              audioEl.current.currentTime = e.target.value;
            }}
          />
        </div>

        <Volume audioEl={audioEl} volume={volume} />
      </div>
    </div>
  );
};

export default SeekBar;
