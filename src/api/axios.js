const PORT = process.env.REACT_APP_PORT || 8080;
const HOST = `http://localhost:${PORT}`;

const GET_ALL_VIDEOS_API_URL = `${HOST}/videos`;
const GET_SINGLE_VIDEO_API_URL = (id) => `${HOST}/videos/${id}`;

module.exports = {
	GET_ALL_VIDEOS_API_URL,
	GET_SINGLE_VIDEO_API_URL,
};
