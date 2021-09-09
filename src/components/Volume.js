import React from "react";

const Volume = ({ volume, audioEl }) => {
  return (
    <div className="volume">
      <input
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
  );
};

export default Volume;
