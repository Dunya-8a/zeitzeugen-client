import React, { useState } from "react";
import {uploadIpfs} from "../ipfs";
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

const Upload = () =>
{
    const [videoBuffer, setVideoBuffer] = useState([]);
	// // 48x48 PNG of a yin-yang symbol
	// const base64 = testVideo;
	// console.log(base64);

	// async function run() {
	// 	const blob = await fetch(base64).then((res) => res.blob());
	// 	console.log(blob);

	// 	const formData = new FormData();
	// 	formData.append("yinyang.png", blob);
	// 	console.log(formData);

	// 	// Post the form, just make sure to set the 'Content-Type' header
	// 	const res = await axios.post("//localhost:8080/upload", formData, {
	// 		headers: {
	// 			"Content-Type": "multipart/form-data",
	// 		},
	// 	});

	// 	// Prints "yinyang.png"
	// 	console.log(res.data);
	// }
	// run().catch((err) => console.log(err));

	const captureFile = (e) => {
		e.preventDefault();
		console.log("capture file");
        const file = e.target.files[0];
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () =>
        {
            const buffer = new Uint8Array(reader.result);
            setVideoBuffer(buffer);
        }
    };
    console.log(videoBuffer)

	const submitIPFS = (e) => {
		e.preventDefault();
        console.log("submit");
        console.log(uploadIpfs(videoBuffer));
	};

	return (
		<>
			<Header />
			<main>
				<form onSubmit={submitIPFS}>
					<input type="file" onChange={captureFile}></input>
					<input type="submit" />
				</form>
			</main>

			<Footer />
		</>
	);
};

export default Upload;

{
	/* <form method="post" encType="multipart/form-data">
	<input id="video-file" type="file" name="videofile" onChange={UploadFile} />
	<button type="submit">Button</button>
</form>; */
}

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
