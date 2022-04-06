import React from "react";
import SocialButton from "./SocialButton";

import {
	Box,
	Container,
	Stack,
	Text,
	Link,
	useColorModeValue,
	Divider,
	Flex,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}>
			<Container
				as={Flex}
				maxW={"6xl"}
				h={12}
				py={12}
				pb={16}
				direction={{ base: "column", md: "row" }}
				spacing={6}
				justify={{ md: "space-between" }}
				align={{ base: "center", md: "center" }}>
				<Text>Logo</Text>
				<Text>2022 Made with 💜 by Dünya Baradari at BrainStation</Text>

				<Stack direction={"row"} spacing={6} align="center">
					<Stack direction={"row"} spacing={6} height={6}>
						<Link href={"/about"}>About</Link>
						<Divider orientation="vertical" />
						<Link href={"/contact"}>Contact</Link>
					</Stack>

					<Stack direction={"row"} spacing={6}>
						<SocialButton label={"GitHub"} href={"https://github.com/Dunya-8a"}>
							<FaGithub />
						</SocialButton>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
