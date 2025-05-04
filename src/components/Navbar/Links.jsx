import React from "react";
import { NavLink } from "react-router";

const Links = () => {
	return (
		<div className="max-sm:hidden flex items-center gap-x-16 text-xl lg:text-2xl">
			<NavLink
				to="/"
				className="hover:text-purple-300 transition-colors duration-100"
			>
				Home
			</NavLink>
			<NavLink
				to="/profile"
				className="hover:text-purple-300 transition-colors duration-100"
			>
				My Profile
			</NavLink>
		</div>
	);
};

export default Links;
