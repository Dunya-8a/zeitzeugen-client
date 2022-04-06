import React, { useState } from "react";
import { callIPFS } from "../ipfs";
import axios from "axios";
import POST_VIDEO_FILE from "../api/axios";
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

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";

const Upload = () => {
	const [videoBuffer, setVideoBuffer] = useState([]);

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

	const submitIPFS = async () => {
		console.log("submit");
		const fileHash = await callIPFS(videoBuffer);
		console.log(`https://ipfs.io/ipfs/${fileHash}`);
		return `https://ipfs.io/ipfs/${fileHash}`;
	};

	const submitForm = async (e) => {
		e.preventDefault();
		const firstName = e.target.fname.value;
		const surname = e.target.surname.value;
		const age = e.target.age.value || null;
		const bday = e.target.bday.value || null;
		const bplace = e.target.bplace.value || null;
		const placesLived = e.target.placeslived.value || null;
		const gender = e.target.gender.value;
		const topics = e.target.topics.value;
		const summary = e.target.summary.value || null;
		const ipfsLink = await submitIPFS();
		const userId = 1;
		const iDate = e.target.idate.value;

		const newVideo = {
			time_witness_first_name: firstName,
			time_witness_surname: surname,
			age: age,
			date_of_birth: bday,
			place_of_birth: bplace,
			places_lived: placesLived,
			gender: gender,
			topics: topics,
			story_summary: summary,
			video_link: ipfsLink,
			user_id: userId,
			date_of_interview: iDate,
		};
		await axios
			.post(POST_VIDEO_FILE, newVideo)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
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
					<input type="date" name="bday" placeholder="Date of Birth"></input>
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
					<input type="date" name="idate" placeholder="Interview date"></input>
					<input type="submit" id="submit" />
				</form>
			</main>

			<Footer />
		</>
	);
};

export default Upload;

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
