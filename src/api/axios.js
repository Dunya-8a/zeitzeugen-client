const PORT = process.env.REACT_APP_PORT || 5050;
const HOST = `http://localhost:${PORT}`;

const GET_ALL_USERS_API_URL = (id) => `${HOST}/users/${id}`;
const GET_ALL_VIDEOS_API_URL = `${HOST}/videos`;
const GET_SINGLE_VIDEO_API_URL = (id) => `${HOST}/videos/${id}`;
const POST_VIDEO_FILE_API_URL = `${HOST}/videos/upload`;

module.exports = {
	GET_ALL_USERS_API_URL,
	GET_ALL_VIDEOS_API_URL,
	GET_SINGLE_VIDEO_API_URL,
	POST_VIDEO_FILE_API_URL,
};
