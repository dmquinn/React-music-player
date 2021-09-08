import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import PlayerImage from "./PlayerImage";
import Playlist from "./Playlist";

function Player({ currentSongIndex, songs, setCurrentSongIndex }) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <>
      <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
      <div className="player">
        <div className="left">
          <PlayerImage song={songs[currentSongIndex]} />
          <PlayerControls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
          />
        </div>
        <div className="detailsPlaylist">
          <PlayerDetails song={songs[currentSongIndex]} />
          <Playlist songs={songs} setCurrentSongIndex={setCurrentSongIndex} />
        </div>
      </div>
    </>
  );
}

export default Player;
