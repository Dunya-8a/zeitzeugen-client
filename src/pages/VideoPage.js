import React from "react";

const VideoPage = () => {
	return (
		<>
			<iframe
				title="YouTube video player"
				type="text/html\"
				width="640"
				height="390"
				src="https://www.youtube.com/embed/YhGmul5G77I"
				frameBorder="0"
				allowFullScreen></iframe>
			<img
				src="https://ipfs.io/ipfs/QmWzexLY3aqqm3uVoWxGEUXhhys6RTYy4Z9FJFFN7kYoAa?filename=pika.png"
				alt="test"
				width="400px"
			/>
			<video
				controls
				height="300px"
				src="https://ipfs.io/ipfs/QmSjpC3YR1NPbqiHWe33QbHqjLuj7daEeeRWbVjoxbu9Cc?filename=pexels-artem-podrez-7049271.mp4"></video>
			<input type="file" />
		</>
	);
};

export default VideoPage;
