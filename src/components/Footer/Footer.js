import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer>
			<div>
				<Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
			</div>
			<Link to="https://github.com/Dunya-8a">
				<div>
					<i className="fa-brands fa-github"></i>
				</div>
			</Link>
		</footer>
	);
};
