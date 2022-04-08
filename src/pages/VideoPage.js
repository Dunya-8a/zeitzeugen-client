import React, { useState, useEffect } from "react";
import axios from "axios";
import { GET_SINGLE_VIDEO_API_URL } from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YoutubeEmbed from "../utils/YoutubeEmbed/YoutubeEmbed";
import { AspectRatio, Box, Text, Stack, Badge } from "@chakra-ui/react";

const VideoPage = (routerProps) => {
	const id = routerProps.match.params.video_id;
	const [video, setVideo] = useState(null);

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

	let name;
	let topicsArray;
	let birthDate;
	let interviewDate;
	if (video) {
		name = `${video.time_witness_first_name} ${
			video.time_witness_surname === "Unknown" ? "" : video.time_witness_surname
		}`;
		topicsArray = video.topics.split(",");
		birthDate = new Date(video.date_of_birth);
		birthDate = birthDate.toLocaleDateString();
		interviewDate = new Date(video.date_of_interview);
		interviewDate = interviewDate.toLocaleDateString();
	}

	return (
		<>
			<Header />

			{video && (
				<main>
					{video.sample_video ? (
						<YoutubeEmbed embedId={video.video_link} />
					) : (
						<AspectRatio maxW="45%" align={"center"} margin="0 auto">
							<video controls src={video.video_link}></video>
						</AspectRatio>
					)}
					<Stack spacing={3} padding="2% 15%">
						<Text fontSize="6xl">{name}'s Story</Text>
						{video.age && <Text fontSize="3xl">{video.age} years old</Text>}
						{video.date_of_birth && <Text fontSize="xl">Born {birthDate}</Text>}

						<Box display="flex" alignItems="baseline">
							{topicsArray.map((topic) => {
								return (
									<Badge borderRadius="full" px="3" colorScheme="teal" mr="1">
										{topic}
									</Badge>
								);
							})}
						</Box>
						<Text fontSize="lg">{video.story_summary}</Text>
						<Text fontSize="md">Date of Interview: {interviewDate}</Text>
						{/* <Text fontSize="5xl">(5xl) In love with React & Next</Text>
						<Text fontSize="4xl">(4xl) In love with React & Next</Text>
						<Text fontSize="3xl">(3xl) In love with React & Next</Text>
						<Text fontSize="2xl">(2xl) In love with React & Next</Text>
						<Text fontSize="xl">(xl) In love with React & Next</Text>
						<Text fontSize="lg">(lg) In love with React & Next</Text>
						<Text fontSize="md">(md) In love with React & Next</Text>
						<Text fontSize="sm">(sm) In love with React & Next</Text>
						<Text fontSize="xs">(xs) In love with React & Next</Text> */}
					</Stack>
				</main>
			)}

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
