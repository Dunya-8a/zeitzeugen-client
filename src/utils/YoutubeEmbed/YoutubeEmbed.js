// From https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbed.scss";

const YoutubeEmbed = ({ embedId }) => (
	<div className="video-responsive">
		<iframe
			title="Embedded YouTube"
			type="text/html"
			width="240px"
			// height="390"
			src={
				`https://www.youtube.com/embed/${embedId}` +
				"?fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&color=white"
			}
			frameBorder="0"
			controls="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen></iframe>
	</div>
);

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
