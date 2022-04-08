import React from "react";

// COMPONENTS
import SignUpHeader from "../components/SignUpHeader";
import Footer from "../components/Footer";
import { Box, Text, Stack, Badge } from "@chakra-ui/react";

const Landing = () => {
	return (
		<>
			<SignUpHeader />
			<Box>
				<Box>
					<Text fontSize="6xl">Zeitzeugen</Text>
				</Box>

				<Stack>
					<Text fontSize="4xl">
						Life is short and we never know when each of us will leave.
					</Text>
					<Text fontSize="4xl">Our life stories are unique, but volatile.</Text>
					<Text fontSize="4xl">
						In collective memory, however, we live eternally.
					</Text>
				</Stack>
				<Box>
					<Text fontSize="4xl">
						With zeitzeugen, we want to collect the life stories of people of
						all kinds, and store them for future generations.
					</Text>
				</Box>
				<Box>
					<Text fontSize="4xl">
						Do you have a loved one, friend, mentor or acquaintance that you’d like
						not to be forgotten? Who you’d like to live on in collective
						memory, for your (grand-)children to meet and yourself to remember?
					</Text>
				</Box>
				<Box>
					<Text fontSize="4xl">
						Then join our forces. Equipped with your smartphone, camera or voice
						recorder, arrange a time to interview your chosen person. You can
						use one of our question templates or come up with your own
						questions.
					</Text>
				</Box>
				<Box>
					<Text fontSize="4xl">
						Then join our forces. Equipped with your smartphone, camera or voice
						recorder, arrange a time to interview your chosen person. You can
						use one of our question templates or come up with your own
						questions.
					</Text>
				</Box>
				<Box>
					<Text fontSize="4xl">They shall not be forgotten.</Text>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default Landing;
