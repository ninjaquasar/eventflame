import {
	BanknoteArrowDownIcon,
	CalendarCheckIcon,
	ChartBarStackedIcon,
	MapPinnedIcon,
	TicketXIcon,
	UserRoundCogIcon,
	XIcon,
} from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import InputWithLabel from "../components/Auth/InputWithLabel";
import { Slide, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

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
	const handleReserveSeat = (event) => {
		event.preventDefault();
		event.target.visitorName.value = "";
		event.target.visitorEmail.value = "";
		const seatId = Math.floor(Math.random() * 1000);
		toast.success(`Reserved Seat-${seatId} for you!`, {
			theme: "dark",
			position: "top-center",
			autoClose: 3500,
			closeOnClick: true,
			closeButton: <XIcon size={24} />,
			draggable: true,
			pauseOnHover: false,
			pauseOnFocusLoss: false,
			transition: Slide,
			style: {
				padding: "1rem",
				display: "flex",
				columnGap: "1rem",
				width: "25rem",
			},
		});
	};
	return (
		<section className="my-4 space-y-8 px-6 sm:px-16 lg:px-24 2xl:px-28">
			<Helmet>
				<title>{name} - EventFlame</title>
			</Helmet>
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
			<div>
				<h2 className="text-4xl font-bold text-center">Reserve a Seat</h2>
				<form
					onSubmit={handleReserveSeat}
					className="w-2/5 mt-4 mx-auto p-8 rounded-2xl bg-gradient-to-br from-[#111111] to-[#121212] flex flex-col gap-y-6"
				>
					<InputWithLabel
						inputType="text"
						backendName="visitorName"
						isRequired={true}
					>
						Name
					</InputWithLabel>
					<InputWithLabel
						inputType="email"
						backendName="visitorEmail"
						isRequired={true}
					>
						Email
					</InputWithLabel>
					<button
						type="submit"
						className="w-full py-2 text-2xl font-medium bg-primary rounded-xl cursor-pointer"
					>
						Reserve Seat
					</button>
				</form>
			</div>
		</section>
	);
};

export default EventDetails;
