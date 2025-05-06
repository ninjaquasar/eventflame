import React from "react";
import { NavLink } from "react-router";

const EventCard = ({ data }) => {
	const { id, thumbnail, name, category, location } = data;
	return (
		<div className="rounded-2xl bg-neutral-800 flex flex-col">
			<div className="overflow-hidden rounded-t-2xl">
				<img
					src={thumbnail}
					alt="Thumbnail"
					className="w-full rounded-t-2xl cursor-pointer hover:scale-110 transition-transform duration-200"
					onClick={() => window.open(thumbnail, "_blank")}
				/>
			</div>
			<div className="m-6 space-y-5">
				<div className="flex justify-between">
					<span className="bg-primary px-3 py-1 rounded-full font-medium">
						{category}
					</span>
					<span className="font-medium">{location}</span>
				</div>
				<h4 className="text-2xl font-bold">{name}</h4>
			</div>
			<div className="overflow-hidden mt-auto rounded-b-2xl">
				<NavLink
					to={`/${id}`}
					target="_blank"
				>
					<button
						type="button"
						className="w-full py-2 bg-primary text-xl font-medium rounded-b-2xl hover:scale-110 transition-transform active:bg-primary/80 cursor-pointer"
					>
						View More
					</button>
				</NavLink>
			</div>
		</div>
	);
};

export default EventCard;
