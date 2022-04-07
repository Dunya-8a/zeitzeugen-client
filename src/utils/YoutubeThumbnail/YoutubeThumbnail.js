// From https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

import React from "react";
import PropTypes from "prop-types";
import "./YoutubeThumbnail.scss";

const YoutubeThumbnail = ({ embedId }) => {
	return (
		<div className="thumbnail">
			<img
				className="thumbnail__media"
				src={`http://img.youtube.com/vi/${embedId}/hqdefault.jpg`}
				alt="thumbnail"
				
			/>
		</div>
	);
};

YoutubeThumbnail.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeThumbnail;
