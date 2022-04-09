import React from "react";

// COMPONENTS
import SignUpHeader from "../components/SignUpHeader";
import Footer from "../components/Footer";
import { Box, Text, Stack, Link } from "@chakra-ui/react";
import "./Landing.scss";

const Landing = () => {
	return (
		<>
			<SignUpHeader />
			<Box className="landing">
				<Box className="landing__container-title">
					<Text fontSize="6xl">Zeitzeugen</Text>
				</Box>

				<Stack spacing={18} className="landing__container-right">
					<Text fontSize="4xl">
						Life is short and we never know when each of us will leave.
					</Text>
					<Text fontSize="4xl">Our life stories are unique, but volatile.</Text>
					<Text fontSize="4xl">
						In collective memory, however, we live eternally.
					</Text>
				</Stack>
				<Box className="landing__container-left">
					<Box className="landing__container-inner">
						<Text fontSize="4xl">
							With zeitzeugen, we want to collect the life stories of people of
							all kinds, and store them for future generations.
						</Text>
					</Box>
				</Box>
				<Box className="landing__container-right">
					<Text fontSize="4xl">
						Do you have a loved one, friend, mentor or acquaintance that you’d
						like not to be forgotten? Who you’d like to live on in collective
						memory, for your (grand-)children to meet and yourself to remember?
					</Text>
				</Box>
				<Box className="landing__container-left">
					<Text fontSize="4xl">
						<Text fontWeight="bold">Then join our forces. </Text>Equipped with
						your smartphone, camera or voice recorder, arrange a time to
						interview your chosen person. You can use one of our question
						templates or come up with your own questions.
					</Text>
				</Box>
				<Box className="landing__container-right">
					<Text fontSize="4xl">
						Upload the video to zeitzeugen. We will upload it to the{" "}
						<span>
							<Link href="https://ipfs.io/">Interplanetary File System</Link>
						</span>
						, a decentralized, censorship-resistant store of data that can be
						accessed by anyone, forever.
					</Text>
				</Box>
				<Box className="landing__container-left landing__container-bottom">
					<Text fontSize="4xl">They shall not be forgotten.</Text>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default Landing;
