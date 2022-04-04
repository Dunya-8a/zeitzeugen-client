// IMPORT MODULES
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORT COMPONENTS AND STYLES
import VideoPage from "./pages/VideoPage";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Library from "./pages/Library/Library";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/home" component={Home} />
					<Route path="/library" component={Library} />
					<Router
						path="/:videoId"
						render={(routerProps) => <VideoPage {...routerProps} />}
					/>
				</Switch>
			</Router>
		</>
	);
};

export default App;
