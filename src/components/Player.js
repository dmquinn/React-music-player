import React, { useState, useRef, useEffect } from "react";
import throttle from "lodash.throttle";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import PlayerImage from "./PlayerImage";
import Playlist from "./Playlist";
import Seekbar from "./Seekbar";
import Volume from "./Volume";

function Player({ currentSongIndex, songs, setCurrentSongIndex }) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioEl.current;
    const onDuration = () => setDuration(audio.duration);
    const onTime = throttle(() => {
      setTime(audio.currentTime);
    }, 250);
    const onVolume = () => setVolume(audio.volume);

    const onSeeking = () => {
      console.log("seeking...");
      // audio.volume = 0;
    };
    const onSeeked = () => {
      console.log("seeked");
      // audio.volume = 1;
    };

    audio.addEventListener("durationchange", onDuration);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("volumechange", onVolume);

    audio.addEventListener("seeking", onSeeking);
    audio.addEventListener("seeked", onSeeked);

    return () => {
      audio.removeEventListener("durationchange", onDuration);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("volumechange", onVolume);

      audio.removeEventListener("seeking", onSeeking);
      audio.removeEventListener("seeked", onSeeked);
    };
  }, []);
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
          />{" "}
        </div>
        <div className="detailsPlaylist">
          <PlayerDetails song={songs[currentSongIndex]} />
          <Playlist songs={songs} setCurrentSongIndex={setCurrentSongIndex} />
        </div>
      </div>
      <div classname="playControls">
        <Seekbar duration={duration} time={time} audioEl={audioEl} />
        <Volume audioEl={audioEl} volume={volume} />
      </div>
    </>
  );
}

export default Player;
