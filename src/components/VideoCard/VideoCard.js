import React from "react";

// import YoutubeEmbed from "../../utils/YoutubeEmbed/YoutubeEmbed";
import YoutubeThumbnail from "../../utils/YoutubeThumbnail/YoutubeThumbnail";
import "./VideoCard.scss"
import {Box, Badge, Image} from "@chakra-ui/react";

const VideoCard = ({ video }) =>
{
	console.log(video.topics.split(","));
	const name = `${video.time_witness_first_name} ${video.time_witness_surname === "Unknown"
			? ""
			: video.time_witness_surname
		}`

	const youtubeLink = (embedId) => {
		return `http://img.youtube.com/vi/${embedId}/mqdefault.jpg`;
	};
	// return (
	// 	<div className="video-card">
			// {video.sample_video && <YoutubeThumbnail embedId={video.video_link} />}
			// <h2 className="video-card__title">{`${video.time_witness_first_name} ${
			// 	video.time_witness_surname === "Unknown"
			// 		? ""
			// 		: video.time_witness_surname
			// }`}</h2>
	// 	</div>

	return (
		<>
			{video.sample_video && (
				<Box maxW="320" borderWidth="1px" borderRadius="lg" overflow="hidden">
					<Image
						src={youtubeLink(video.video_link)}
						alt={name}
						className="thumbnail__media"
						overflow="hidden"
						objectFit="cover"
					/>
					{/* <YoutubeThumbnail embedId={video.video_link} /> */}

					<Box p="6">
						<Box display="flex" alignItems="baseline">
							<Badge borderRadius="full" px="2" colorScheme="teal">
								New
							</Badge>
							<Box
								color="gray.500"
								fontWeight="semibold"
								letterSpacing="wide"
								fontSize="xs"
								textTransform="uppercase"
								ml="2">
								{/* {property.beds} beds &bull; {property.baths} baths */}
							</Box>
						</Box>

						<Box
							mt="1"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							isTruncated>
							{name}
						</Box>

						<Box>
							{/* {property.formattedPrice} */}
							<Box as="span" color="gray.600" fontSize="sm">
								/ wk
							</Box>
						</Box>

						<Box display="flex" mt="2" alignItems="center">
							<Box as="span" ml="2" color="gray.600" fontSize="sm">
								{/* {property.reviewCount} reviews */}
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</>
	);

	
	// const property = {
	// 	imageUrl: "https://bit.ly/2Z4KKcF",
	// 	imageAlt: "Rear view of modern home with pool",
	// 	beds: 3,
	// 	baths: 2,
	// 	title: "Modern home in city center in the heart of historic Los Angeles",
	// 	formattedPrice: "$1,900.00",
	// 	reviewCount: 34,
	// 	rating: 4,
	// };

	// return (
	// 	<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
	// 		<Image src={property.imageUrl} alt={property.imageAlt} />

	// 		<Box p="6">
	// 			<Box display="flex" alignItems="baseline">
	// 				<Badge borderRadius="full" px="2" colorScheme="teal">
	// 					New
	// 				</Badge>
	// 				<Box
	// 					color="gray.500"
	// 					fontWeight="semibold"
	// 					letterSpacing="wide"
	// 					fontSize="xs"
	// 					textTransform="uppercase"
	// 					ml="2">
	// 					{property.beds} beds &bull; {property.baths} baths
	// 				</Box>
	// 			</Box>

	// 			<Box
	// 				mt="1"
	// 				fontWeight="semibold"
	// 				as="h4"
	// 				lineHeight="tight"
	// 				isTruncated>
	// 				{property.title}
	// 			</Box>

	// 			<Box>
	// 				{property.formattedPrice}
	// 				<Box as="span" color="gray.600" fontSize="sm">
	// 					/ wk
	// 				</Box>
	// 			</Box>

	// 			<Box display="flex" mt="2" alignItems="center">
					
	// 				<Box as="span" ml="2" color="gray.600" fontSize="sm">
	// 					{property.reviewCount} reviews
	// 				</Box>
	// 			</Box>
	// 		</Box>
	// 	</Box>
	// );

};

export default VideoCard;
