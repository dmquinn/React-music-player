import React from "react";

function PlayerImage({ song }) {
  const mainImage = song.img_src;
  return (
    <>
      <img src={mainImage} />{" "}
    </>
  );
}

export default PlayerImage;
