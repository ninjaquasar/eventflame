import React from "react";
import LogoTitle from "../components/Navbar/LogoTitle";
import Links from "../components/Navbar/Links";
import CallToAction from "../components/Navbar/CallToAction";
import MobileMenu from "../components/Navbar/MobileMenu";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center px-6 sm:px-16 lg:px-24 2xl:px-28 py-3 sm:py-6">
			<MobileMenu />
			<LogoTitle />
			<Links />
			<CallToAction />
		</nav>
	);
};

export default Navbar;
