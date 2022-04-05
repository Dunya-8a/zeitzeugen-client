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
					<Router
						path="/:videoId"
						render={(routerProps) => <VideoPage {...routerProps} />}
					/>
					{/* <Route path="/upload" component={Home} /> */}
				</Switch>
			</Router>
		</>
	);
};

export default App;
