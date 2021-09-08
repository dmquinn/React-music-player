import React from "react";

function PlayerDetails({ song }) {
  const backgroundImage = {
    backgroundImage: "url(" + song.img_src + ")",
  };
  return (
    <>
      <div className="backdropImage" style={backgroundImage}>
        {" "}
      </div>

      <div className="details">
        <h1 className="details-artist">{song.title}</h1>
        <h3 className="details-title">{song.artist}</h3>
      </div>
    </>
  );
}

export default PlayerDetails;
