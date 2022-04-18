import React from "react";
import {
	Box,
	Flex,
	Avatar,
	Button,
	HStack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	Image,
	Link,
	// useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavLink from "./NavLink";
// import Searchbar from "./Searchbar/Searchbar";
import logo from "../assets/logo.svg";

const Links = ["Explore", "Library", "Upload"];

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	// const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}
					px={6}>
					<Link href={"/"}>
						<Box>
							<Image src={logo} boxSize="150px" objectFit="contain" />
						</Box>
					</Link>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={9}>
							{/* Navigation */}
							<HStack
								as={"nav"}
								spacing={6}
								display={{ base: "none", md: "flex" }}>
								{Links.map((link) => (
									<NavLink key={link} href={`/${link.toLowerCase()}`}>
										{link}
									</NavLink>
								))}
							</HStack>

							{/* Light/Dark Theme */}
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
							</Button>

							{/* User menu */}
							<Menu>
								<MenuButton
									as={Button}
									rounded={"full"}
									variant={"link"}
									cursor={"pointer"}
									minW={0}>
									<Avatar
										size={"sm"}
										src={"https://avatars.dicebear.com/api/male/username.svg"}
									/>
								</MenuButton>
								<MenuList alignItems={"center"}>
									<br />
									<Center>
										<Avatar
											size={"2xl"}
											src={"https://avatars.dicebear.com/api/male/username.svg"}
										/>
									</Center>
									<br />
									<Center>
										<p>Dwight Ray</p>
									</Center>
									<br />
									<MenuDivider />
									<MenuItem>Your Servers</MenuItem>
									<MenuItem>Account Settings</MenuItem>
									<MenuItem>Logout</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};

export default Header;
