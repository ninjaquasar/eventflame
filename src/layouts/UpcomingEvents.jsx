import React from "react";
import EventCard from "../components/Events/EventCard";

const UpcomingEvents = ({ eventsData }) => {
	return (
		<section className="my-28 space-y-12 px-6 sm:px-16 lg:px-24 2xl:px-28">
			<h2 className="bg-gradient-to-r bg-clip-text text-transparent from-purple-100 to-primary text-4xl font-bold text-center">
				Upcoming Events
			</h2>
			<div className="grid grid-cols-3 gap-6">
				{eventsData.map((eventData) => (
					<EventCard
						key={eventData.id}
						data={eventData}
					/>
				))}
			</div>
		</section>
	);
};

export default UpcomingEvents;
