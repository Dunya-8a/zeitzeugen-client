import React from "react";
// import "./Searchbar.scss";

const Searchbar = () => {
	return (
		<>
			<form action="search" className="searchbar">
				<button className="searchbar__button"></button>
				<label htmlFor="searchbar"></label>
				<input
					type="search"
					className="searchbar__input"
					placeholder="Search"
					name="searchbar"
				/>
			</form>
		</>
	);
};

export default Searchbar;
