// IMPORT MODULES
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

// IMPORT COMPONENTS AND STYLES
import VideoPage from "./pages/VideoPage";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Library from "./pages/Library";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Upload from "./pages/Upload/Upload";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/home" component={Home} />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<Redirect path="/explore" to="/home" />
					<Route path="/library" component={Library} />
					<Route
						path="/upload"
						render={(routerProps) => <Upload {...routerProps} />}
					/>
					<Route
						path="/videos/:video_id"
						render={(routerProps) => <VideoPage {...routerProps} />}
					/>
				</Switch>
			</Router>
		</>
	);
};

export default App;
