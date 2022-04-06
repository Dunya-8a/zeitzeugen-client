import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GET_ALL_VIDEOS_API_URL } from "../api/axios";

// IMPORT COMPONENTS
import VideoCard from "../components/VideoCard/VideoCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
	const [videos, setVideos] = useState([]);

	const fetchAllVideos = () => {
		axios
			.get(GET_ALL_VIDEOS_API_URL)
			.then(({ data }) => setVideos(data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		window.scrollTo(0, 0); // Bring view back to top
		fetchAllVideos();
	}, []);

	console.log(videos);

	return (
		<>
			<Header />
			{videos.map((video) => (
				<Link key={video.video_id} to={`/${video.video_id}`}>
					<VideoCard key={video.video_id} video={video} />
				</Link>
			))}
			<Footer />
		</>
	);
};

export default Home;
