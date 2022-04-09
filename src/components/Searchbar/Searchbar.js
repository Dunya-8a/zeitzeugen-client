/* Not implemented, for future iterations of the website */
import React from "react";

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
