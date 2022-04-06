import React, { useState } from "react";
import { callIPFS } from "../ipfs";
import axios from "axios";
import { POST_VIDEO_FILE_API_URL } from "../api/axios";

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DatePicker } from "@blueprintjs/datetime";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";

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
	};

	const submitForm = async (e) => {
		e.preventDefault();
		const firstName = e.target.fname.value;
		const surname = e.target.surname.value;
		const age = e.target.age.value || null;
		const bplace = e.target.bplace.value || null;
		const placesLived = e.target.placeslived.value || null;
		const gender = e.target.gender.value;
		const topics = e.target.topics.value;
		const summary = e.target.summary.value || null;
		const ipfsLink = await submitIPFS();
		const userId = 1;

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
			<main>
				<form onSubmit={submitForm}>
					<input type="file" onChange={captureFile}></input>
					<label htmlFor="firstName">Surname</label>
					<input
						type="text"
						name="fname"
						placeholder="Time Witness' First Name"
						autoCapitalize="words"></input>
					<input
						type="text"
						name="surname"
						placeholder="Time Witness' Surname"
						autoCapitalize="words"></input>
					<input type="text" name="age" placeholder="Time Witness' Age"></input>
					<label>Birthday</label>
					<DatePicker showActionsBar={true} onChange={getBirthDate} />
					<input type="text" name="bplace" placeholder="Place of Birth"></input>
					<input
						type="text"
						name="placeslived"
						placeholder="Places lived"></input>
					<input type="text" name="gender"></input>
					{/* <input type="radio" name="gender" value="Female"></input>
					<input type="radio" name="gender" value="Male"></input>
					<input type="radio" name="gender" value="Other"></input> */}
					<input type="topics" name="topics" placeholder="Topics"></input>
					<input
						type="text"
						name="summary"
						id="summary"
						placeholder="Story summary"></input>
					<label>Day of Interview</label>
					<DatePicker showActionsBar={true} onChange={getInterviewDate} />
					<input type="submit" id="submit" />
				</form>
			</main>

			<Footer />
		</>
	);
};

export default Upload;

// import axios from "axios";
// import {
// 	Button,
// 	FormControl,
// 	FormLabel,
// 	FormErrorMessage,
// 	FormHelperText,
// 	Input,
// 	NumberInput,
// 	NumberInputField,
// 	NumberInputStepper,
// 	NumberIncrementStepper,
// 	NumberDecrementStepper,
// } from "@chakra-ui/react";
// import { UploadFile } from "../utils/UploadFile";
// import testVideo from "../assets/testVideo.mp4";

/* <FormControl isRequired>
					<FormLabel htmlFor="first-name">First name</FormLabel>
					<Input id="first-name" placeholder="First name" />
				</FormControl>
				<FormControl isRequired>
					<FormLabel htmlFor="first-name">Surname</FormLabel>
					<Input id="surname" placeholder="Surname" />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="age">Age</FormLabel>
					<NumberInput max={150} min={1}>
						<NumberInputField id="age" />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>

				<form onSubmit={UploadFile}>
					<FormControl>
						<FormLabel htmlFor="file">Upload Video</FormLabel>
						<Input
							id="video-file"
							type="file"
							name="videofile"
							onChange={UploadFile}
						/>
						<Button type="submit">Button</Button>
					</FormControl>
                </form>
                
                <FormControl onSubmit={UploadFile}>
					<FormLabel htmlFor="file">Upload Video</FormLabel>
					<Input id="video-file" type="file" />
					<Button type="submit">Button</Button>
                </FormControl> */

/* <main className="container content">
				<h1>Upload</h1>
				<div className="field">
					<label className="label">First name</label>
					<div className="control">
						<input
							className="input is-rounded"
							type="text"
							placeholder="First name"
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Surname</label>
					<div className="control">
						<input
							className="input  is-rounded"
							type="text"
							placeholder="Surname"
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Age</label>
					<div className="control">
						<input
							className="input  is-rounded"
							type="text"
							placeholder="Age"
						/>
					</div>
				</div>

				<div className="field">
					<label className="label">Subject</label>
					<div className="control">
						<div className="select">
							<select>
								<option>Select dropdown</option>
								<option>With options</option>
							</select>
						</div>
					</div>
				</div>

				<div className="field">
					<label className="label">Message</label>
					<div className="control">
						<textarea className="textarea" placeholder="Textarea"></textarea>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<label className="checkbox">
							<input type="checkbox" />I agree to the{" "}
							<a href="#">terms and conditions</a>
						</label>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<label className="radio">
							<input type="radio" name="question" />
							Yes
						</label>
						<label className="radio">
							<input type="radio" name="question" />
							No
						</label>
					</div>
				</div>

				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Submit</button>
					</div>
					<div className="control">
						<button className="button is-link is-light">Cancel</button>
					</div>
				</div>
			</main> */
