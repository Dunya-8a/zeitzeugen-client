import React from "react";

// import YoutubeEmbed from "../../utils/YoutubeEmbed/YoutubeEmbed";
import YoutubeThumbnail from "../../utils/YoutubeThumbnail/YoutubeThumbnail";

const VideoCard = ({ video }) => {
	console.log(video.topics.split(","));
	return (
		<div>
			<YoutubeThumbnail embedId={video.video_link} />
		</div>
	);
};

export default VideoCard;
