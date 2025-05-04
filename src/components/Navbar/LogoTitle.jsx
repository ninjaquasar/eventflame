import React from "react";

const LogoTitle = () => {
	return (
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
	);
};

export default LogoTitle;
