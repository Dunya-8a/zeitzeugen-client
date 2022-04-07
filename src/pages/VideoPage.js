import React, {useState, useEffect} from "react";
import axios from "axios";
import { GET_SINGLE_VIDEO_API_URL } from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YoutubeEmbed from "../utils/YoutubeEmbed/YoutubeEmbed"
import { AspectRatio, Box } from "@chakra-ui/react";

const VideoPage = (routerProps) =>
{
	const id = routerProps.match.params.video_id;
	const [video, setVideo] = useState([]);

	const fetchVideo = () => {
		axios
			.get(GET_SINGLE_VIDEO_API_URL(id))
			.then(({ data }) => setVideo(data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		window.scrollTo(0, 0); // Bring view back to top
		fetchVideo();
	}, []);

	console.log(video);

	return (
		<>
			<Header />
			<main>
				{video.sample_video ? (
					<YoutubeEmbed embedId={video.video_link} />
				) : (
					<AspectRatio maxW="45%" align={"center"} margin="0 auto">
						<video controls height="300px" src={video.video_link}></video>
					</AspectRatio>
				)}
			</main>

			<Footer />
			{/* <iframe
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
			<input type="file" /> */}
		</>
	);
};

export default VideoPage;
