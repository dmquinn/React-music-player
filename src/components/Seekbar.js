import React from "react";

const SeekBar = ({ duration, time, audioEl }) => {
  return (
    <div>
      <div className="player-controls">
        <div className="controls-time">
          <span>
            {Math.floor(time / 60)}:{Math.floor(time % 60)}
          </span>

          <div className="time-input">
            <input
              className="progress"
              type="range"
              min={0}
              max={duration}
              value={time}
              // readOnly
              onChange={(e) => {
                audioEl.current.currentTime = e.target.value;
              }}
            />
          </div>

          <span>
            {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeekBar;
