import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

export const Header = () => {
	return (
		<header>
			<div>Logo</div>
			<Searchbar />
			<div>
				<Link to="/home">Explore</Link> | <Link to="/library">Library</Link>
			</div>
			<Link to="/user">
				<div>Profile Pic</div>
			</Link>
		</header>
	);
};
