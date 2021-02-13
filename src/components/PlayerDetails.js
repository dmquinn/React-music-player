import React from "react";

function PlayerDetails(props) {
	const backgroundImage = {
		backgroundImage: "url(" + props.song.img_src + ")",
	};
	return (
		<div className="player" style={backgroundImage}>
			<div className="details">
				<h3 className="details-title">{props.song.title}</h3>
				<h4 className="details-artist">{props.song.artist}</h4>
			</div>
		</div>
	);
}

export default PlayerDetails;
