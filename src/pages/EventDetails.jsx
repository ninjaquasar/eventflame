import {
	BanknoteArrowDownIcon,
	CalendarCheckIcon,
	ChartBarStackedIcon,
	MapPinnedIcon,
	TicketXIcon,
	UserRoundCogIcon,
} from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const EventDetails = () => {
	const allEvents = useLoaderData();
	const eventId = useParams().event_id;
	const data = allEvents.find((eventData) => eventData.id === eventId);
	const {
		thumbnail,
		name,
		organizer,
		category,
		date,
		calendar_date,
		registration_deadline,
		location,
		entry_fee,
		description,
	} = data;
	console.log(data);
	return (
		<section className="my-4 space-y-12 px-6 sm:px-16 lg:px-24 2xl:px-28">
			<div>
				<img
					src={thumbnail}
					alt="Thumbnail"
					className="w-full"
				/>
			</div>
			<div>
				<h1 className="text-5xl font-bold text-center">{name}</h1>
			</div>
			<div className="flex justify-between">
				<div className="max-w-3/5">
					<p className="text-lg text-justify">{description}</p>
				</div>
				<div className="space-y-4">
					<h5 className="text-xl flex items-center gap-x-3">
						<ChartBarStackedIcon
							size={28}
							color="#bb88ee"
						/>
						<span className="font-semibold">Category:</span>
						{category}
					</h5>
					<h5 className="text-xl flex items-center gap-x-3">
						<UserRoundCogIcon
							size={28}
							color="#bb88ee"
						/>
						<span className="font-semibold">Organizer:</span>
						{organizer}
					</h5>
					<h5 className="text-xl flex items-center gap-x-3">
						<MapPinnedIcon
							size={28}
							color="#bb88ee"
						/>
						<span className="font-semibold">Due Location:</span>
						{location}
					</h5>
					<h5 className="text-xl flex items-center gap-x-3">
						<CalendarCheckIcon
							size={28}
							color="#bb88ee"
						/>
						<span className="font-semibold">Due Date:</span>
						{date}
						<span>
							(View on{" "}
							<a
								href={calendar_date}
								target="_blank"
								className="text-primary font-medium underline underline-offset-2"
							>
								Calendar
							</a>
							)
						</span>
					</h5>
					<h5 className="text-xl flex items-center gap-x-3">
						<TicketXIcon
							size={28}
							color="#bb88ee"
						/>
						<span className="font-semibold">Registration Deadline:</span>
						{registration_deadline}
					</h5>
					<h5 className="text-xl flex items-center gap-x-3">
						<BanknoteArrowDownIcon
							size={28}
							color="#bb88ee"
						/>
						<span className="font-semibold">Entry Fee:</span>
						&#2547;{entry_fee}
					</h5>
				</div>
			</div>
		</section>
	);
};

export default EventDetails;
