// FUNCTIONAL IMPORTS
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { GET_SINGLE_VIDEO_API_URL } from "../api/axios";

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import YoutubeEmbed from "../utils/YoutubeEmbed/YoutubeEmbed";
import { AspectRatio, Box, Text, Stack, Badge } from "@chakra-ui/react";

const VideoPage = (routerProps) => {
	const id = routerProps.match.params.video_id;
	const [video, setVideo] = useState(null);

	const fetchVideo = useCallback(() => {
		axios
			.get(GET_SINGLE_VIDEO_API_URL(id))
			.then(({ data }) => setVideo(data))
			.catch((err) => console.log(err));
	}, [id]);

	useEffect(() => {
		window.scrollTo(0, 0); // Bring view back to top
		fetchVideo();
	}, [fetchVideo]);

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
					<Stack spacing={4} margin="0 auto" maxW="45%" padding=" 2% 0 4% 0">
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
					</Stack>
				</main>
			)}

			<Footer />
		</>
	);
};

export default VideoPage;
