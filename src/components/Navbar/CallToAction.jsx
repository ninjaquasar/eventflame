import React from "react";
import { NavLink } from "react-router";

const CallToAction = () => {
	return (
		<NavLink to="/login">
			<button
				type="button"
				className="px-4 py-2 sm:px-6 lg:px-8 sm:py-3 bg-primary rounded-lg sm:rounded-xl font-semibold sm:text-xl lg:text-2xl cursor-pointer drop-shadow-[0_0_0.6rem_#552288]"
			>
				Login
			</button>
		</NavLink>
	);
};

export default CallToAction;
