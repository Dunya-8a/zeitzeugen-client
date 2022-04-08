// FUNCTIONAL IMPORTS
import React, { useState } from "react";
import axios from "axios";
import { GET_ALL_USERS_API_URL } from "../../api/axios";

// COMPONENTS & STYLING
import "./VideoCard.scss";
// import userIcon from "../../assets/user.png"
import network from "../../assets/network.jpeg";
import { Box, Badge, Image } from "@chakra-ui/react";

const VideoCard = ({ video }) => {
	const [user, setUser] = useState("");
	axios.get(GET_ALL_USERS_API_URL(video.user_id)).then((res) => {
		setUser(`${res.data.user_first_name} ${res.data.user_surname}`);
	});

	// Topics are provided as a string, seperated by a comma
	const topicsArray = video.topics.split(",");

	// Getting the name and interview date in the desired format
	const name = `${video.time_witness_first_name} ${
		video.time_witness_surname === "Unknown" ? "" : video.time_witness_surname
	}`;
	let interviewDate = new Date(video.date_of_interview);
	interviewDate = interviewDate.toLocaleDateString();

	// Retrieves a thumbnail for a specified YouTube video
	const youtubeLink = (embedId) => {
		return `http://img.youtube.com/vi/${embedId}/mqdefault.jpg`;
	};

	return (
		<>
			<Box width="320px" borderWidth="1px" borderRadius="lg" overflow="hidden">
				{video.sample_video ? (
					<Image
						src={youtubeLink(video.video_link)}
						alt={name}
						className="thumbnail__media"
						overflow="hidden"
						objectFit="cover"
					/>
				) : (
					<Image
						src={network}
						alt={name}
						className="thumbnail__media"
						overflow="hidden"
						objectFit="cover"
					/>
				)}

				<Box p="6">
					<Box display="flex" alignItems="baseline">
						{topicsArray.map((topic) => {
							return (
								<Badge borderRadius="full" px="2" colorScheme="teal" mr="1">
									{topic}
								</Badge>
							);
						})}
					</Box>

					<Box
						mt="2"
						fontWeight="semibold"
						as="h3"
						lineHeight="tight"
						isTruncated>
						{name}
					</Box>

					<Box>
						{/* {property.formattedPrice} */}
						<Box as="span" color="gray.600" fontSize="sm" mt="1">
							{interviewDate}
						</Box>
					</Box>

					<Box display="flex" mt="2" alignItems="center">
						{/* User icon, to be replaced with the actual icon that the user provides */}
						{/* <Image
								mt="2"
								borderRadius="full"
								boxSize="30px"
								src={userIcon}
								fallbackSrc={userIcon}
								alt="user"
							/> */}
						<Box as="span" mt="2" color="gray.600" fontSize="sm">
							{user}
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default VideoCard;