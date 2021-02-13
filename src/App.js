import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
	const [songs] = useState([
		{
			title: "Song One",
			artist: "Sweaty Lads",
			img_src:
				"https://images.unsplash.com/photo-1582088506970-81cfad247a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
			src: "./scandydrama1.wav",
		},
		{
			title: "Barry's Chant",
			artist: "Big Barry",
			img_src:
				"https://images.unsplash.com/photo-1549873836-765d3157c324?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
			src: "./scandydrama2.wav",
		},
		{
			title: "Throbbing Thistle",
			artist: "NewBuild",
			img_src:
				"https://images.unsplash.com/flagged/photo-1553095292-127dfadb8275?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
			src: "./scandydrama3.mp3",
		},
	]);

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState([currentSongIndex + 1]);

	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [currentSongIndex]);

	return (
		<div className="App">
			<Player
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	);
}

export default App;
