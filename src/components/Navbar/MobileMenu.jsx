import { SquareChevronDownIcon, SquareChevronUpIcon } from "lucide-react";
import React, { useState } from "react";

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
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
	);
};

export default MobileMenu;
