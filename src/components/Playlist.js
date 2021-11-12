import React, { useEffect, useState } from "react";

const Playlist = ({ songs, setCurrentSongIndex, duration }) => {
  const [selected, setSelected] = useState(0);
  const handleClick = (index) => {
    setSelected(index);
    setCurrentSongIndex(index);
    console.log(selected);
  };
  return (
    <div>
      {songs.map((song, i) => (
        <div
          key={i}
          onClick={(e) => handleClick(i)}
          className={selected === i ? "selectedPlaylistItem" : "playlistItem"}
        >
          <h4>{song.title}</h4>
          <h6>{song.artist}</h6>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
