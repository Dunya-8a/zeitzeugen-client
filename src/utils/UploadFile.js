import React from "react";
import axios from "axios";
import POST_VIDEO_FILE from "../api/axios";

export function UploadFile(data) {
	data.preventDefault();
	console.log(data.target.files[0]);
	const formData = new FormData();
	formData.append("videodata", data.target.videofile);
	console.log(formData);

	axios.post("http://localhost:8080/videos/upload", data.target.files[0]);
}
