import React, { useState } from "react";
import { SquareChevronDownIcon, SquareChevronUpIcon } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="flex justify-between items-center px-6 sm:px-16 lg:px-24 2xl:px-28 py-3 sm:py-6">
			<div className="sm:hidden">
				{isOpen ? (
					<SquareChevronUpIcon
						size={48}
						onClick={() => setIsOpen(!isOpen)}
						className="p-2 rounded-full hover:bg-neutral-800 cursor-pointer"
					/>
				) : (
					<SquareChevronDownIcon
						size={48}
						onClick={() => setIsOpen(!isOpen)}
						className="p-2 rounded-full hover:bg-neutral-800 cursor-pointer"
					/>
				)}
			</div>
			<div className="flex items-center gap-x-3 sm:gap-x-4 cursor-default">
				<img
					src="https://i.ibb.co.com/MDyNGSKL/logo.png"
					alt="Logo"
					className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
				/>
				<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider bg-gradient-to-r bg-clip-text text-transparent from-primary to-amber-600">
					EventFlame
				</h3>
			</div>
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
			<NavLink to="/login">
				<button
					type="button"
					className="px-4 py-2 sm:px-6 lg:px-8 sm:py-3 bg-primary rounded-lg sm:rounded-xl font-semibold sm:text-xl lg:text-2xl cursor-pointer drop-shadow-[0_0_0.6rem_#552288] hover:drop-shadow-[0_0_0.8rem_#552288] active:scale-95 transition-[filter_transform]"
				>
					Login
				</button>
			</NavLink>
		</nav>
	);
};

export default Navbar;
