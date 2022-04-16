import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { callIPFS } from "../../ipfs";
import axios from "axios";
import { POST_VIDEO_FILE_API_URL } from "../../api/axios";

// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DatePicker } from "@blueprintjs/datetime";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "./Upload.scss";

// CHAKRA UI COMPONENTS
import {
	FormControl,
	FormLabel,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Select,
	Stack,
} from "@chakra-ui/react";

const Upload = () => {
	const [videoBuffer, setVideoBuffer] = useState([]);
	const [birthDay, setBirthDay] = useState(null);
	const [interviewDay, setInterviewDay] = useState(null);

	const captureFile = (e) => {
		e.preventDefault();
		console.log("capture file");
		const file = e.target.files[0];
		// Reads data in buffer format, as this is a format the IPFS can understand
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);
		reader.onloadend = () => {
			const buffer = new Uint8Array(reader.result);
			setVideoBuffer(buffer);
		};
	};

	// Passes video data to IPFS function and attaches the returned hash to the ipfs url
	const submitIPFS = async () => {
		const fileHash = await callIPFS(videoBuffer);
		console.log(`https://ipfs.io/ipfs/${fileHash}`);
		return `https://ipfs.io/ipfs/${fileHash}`;

		/* Alternatively, use this public API to retrieve the file
		You still need to upload it using your local node in this configuration
		
		console.log(`https://ipfs.infura.io:5001/api/v0/${fileHash}`); 
		return `https://ipfs.infura.io:5001/api/v0/${fileHash}`;*/
	};

	const submitForm = async (e) => {
		e.preventDefault();
		console.log(e.target.gender.value);
		const firstName = e.target.fname.value;
		const surname = e.target.surname.value;
		const age = e.target.age.value || null;
		const bplace = e.target.bplace.value || null;
		const placesLived = e.target.placeslived.value || null;
		const gender = e.target.gender.value;
		const topics = e.target.topics.value;
		const summary = e.target.summary.value || null;
		const ipfsLink = await submitIPFS();
		const userId = 2;

		const newVideo = {
			time_witness_first_name: firstName,
			time_witness_surname: surname,
			age: age,
			date_of_birth: birthDay, // taken from state, which takes it from DatePicker
			place_of_birth: bplace,
			places_lived: placesLived,
			gender: gender,
			topics: topics,
			story_summary: summary,
			video_link: ipfsLink,
			user_id: userId,
			date_of_interview: interviewDay, // taken from state, which takes it from DatePicker
		};
		await axios
			.post(POST_VIDEO_FILE_API_URL, newVideo)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	const getBirthDate = (e) => {
		setBirthDay(
			e.toLocaleDateString("en-CA", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			})
		);
	};

	const getInterviewDate = (e) => {
		setInterviewDay(
			e.toLocaleDateString("en-CA", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			})
		);
	};

	return (
		<>
			<Header />
			<main className="main">
				<form onSubmit={submitForm}>
					<Stack spacing={4} d="flex" fd="column">
						<FormLabel htmlFor="upload">Upload your Video!</FormLabel>
						{/* <input id="upload" type="file" onChange={captureFile} size="60" /> */}
						{/* Bulma styling for file upload */}
						<div className="file has-name">
							<label className="file-label">
								<input
									className="file-input"
									type="file"
									// name="resume"
									onChange={captureFile}
								/>
								<span className="file-cta">
									<span className="file-icon">
										<i className="fas fa-upload"></i>
									</span>
									<span className="file-label">Choose a file…</span>
								</span>
							</label>
						</div>

						<FormControl isRequired>
							<FormLabel htmlFor="fname">First name</FormLabel>
							<Input
								type="text"
								name="fname"
								placeholder="Time Witness' First Name"
								autoCapitalize="words"
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel htmlFor="surname">Surname</FormLabel>
							<Input
								type="text"
								name="surname"
								placeholder="Time Witness' Surname"
								autoCapitalize="words"
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="age">Age</FormLabel>
							<NumberInput max={150} min={1}>
								<NumberInputField name="age" />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</FormControl>
						<FormLabel>Birthday</FormLabel>
						<DatePicker
							className="date-picker"
							showActionsBar={true}
							onChange={getBirthDate}
						/>

						<FormControl>
							<FormLabel htmlFor="bplace">Place of Birth</FormLabel>
							<Input type="text" name="bplace" placeholder="Place of Birth" />
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="bplace">Places lived</FormLabel>
							<Input
								type="text"
								name="placeslived"
								placeholder="Places lived"
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel htmlFor="gender">Gender</FormLabel>
							<Select name="gender" placeholder="Select Gender">
								<option>Female</option>
								<option>Male</option>
								<option>Other</option>
							</Select>
						</FormControl>
						<FormControl isRequired>
							<FormLabel htmlFor="topics">Topics</FormLabel>
							<Input type="text" name="topics" placeholder="Topics" />
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="summary">Story Summary</FormLabel>
							<Input
								type="text"
								id="summary"
								name="summary"
								// h={10}
								placeholder="Tell us about the person"
							/>
						</FormControl>

						<FormLabel>Day of the Interview</FormLabel>
						<DatePicker
							className="date-picker"
							showActionsBar={true}
							onChange={getInterviewDate}
						/>

						<input type="submit" id="submit" />
					</Stack>
				</form>
			</main>

			<Footer />
		</>
	);
};

export default Upload;