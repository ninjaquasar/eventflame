import {
	LockIcon,
	RadarIcon,
	BatteryFullIcon,
	LocateFixedIcon,
	FileCheckIcon,
	Users2Icon,
	ShirtIcon,
	BusIcon,
	DropletsIcon,
	ScanEyeIcon,
} from "lucide-react";
import React from "react";
// import TipBox from "../components/TipBox";

const TipsLayout = () => {
	return (
		<section className="px-6 sm:px-16 lg:px-24 2xl:px-28">
			<h2 className="text-4xl font-bold text-center">
				Event Attendance{" "}
				<span className="bg-gradient-to-r bg-clip-text from-purple-500 to-purple-400 text-transparent">
					Safety Tips
				</span>
			</h2>
			<p className="text-lg text-center mt-2">
				Simple habits to keep your event experience secure. Your safety is our priority.
			</p>
			<div className="grid grid-cols-4 mt-10 gap-8">
				<div className="bg-[#202020] rounded-2xl px-5 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<RadarIcon
						size={56}
						className="absolute -top-4 -right-4 fill-[#1c1c1c] stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Stay Aware of Your Surroundings</h4>
					<p>Always know what's happening around you and where the exits are.</p>
				</div>
				<div className="bg-[#202020] rounded-2xl px-5 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<LockIcon
						size={56}
						className="absolute -top-4 -right-4 fill-[#1c1c1c] stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Keep Your Belongings Safe</h4>
					<p>Use a zippered bag and don't leave your items unattended.</p>
				</div>
				<div className="bg-[#202020] rounded-2xl px-6 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<BatteryFullIcon
						size={56}
						className="absolute -top-4 -right-4 fill-[#1c1c1c] stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Charge Your Phone Before the Event</h4>
					<p>
						A fully charged phone helps you stay connected in case of emergencies.
					</p>
				</div>
				<div className="bg-[#202020] rounded-2xl px-5 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<LocateFixedIcon
						size={56}
						className="absolute -top-4 -right-4 fill-[#1c1c1c] stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Have a Meeting Point</h4>
					<p>
						If you're going with friends, decide a spot to meet if you get
						separated.
					</p>
				</div>
				<div className="bg-[#202020] rounded-2xl px-5 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<FileCheckIcon
						size={56}
						className="absolute -top-4 -right-4 fill-[#1c1c1c] stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Listen to Event Staff</h4>
					<p>Follow any instructions given by event organizers or security staff.</p>
				</div>
				<div className="bg-[#202020] rounded-2xl px-5 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<Users2Icon
						size={56}
						className="absolute -top-4 -right-4 fill-[#1c1c1c] stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Avoid Overcrowded Areas</h4>
					<p>
						Try not to stay in extremely packed spots to reduce the risk of injury.
					</p>
				</div>
				<div className="bg-[#202020] rounded-2xl px-6 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<DropletsIcon
						size={56}
						className="absolute -top-4 -right-4 fill-[#1c1c1c] stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Stay Hydrated and Carry Water</h4>
					<p>Carry water bottles, especially for long events or outdoor ones.</p>
				</div>
				<div className="bg-[#202020] rounded-2xl px-5 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<ShirtIcon
						size={56}
						className="absolute -top-4 -right-4 fill-[#1c1c1c] stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Wear Comfortable Clothes and Shoes</h4>
					<p>You'll be likely on your feet a lot, so dress accordingly.</p>
				</div>
				<div className="bg-[#202020] rounded-2xl px-6 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<BusIcon
						size={56}
						className="absolute -top-4 -right-4 stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Use Official Transport & Parking</h4>
					<p>Try to use trusted transportation options suggested by the event.</p>
				</div>
				<div className="bg-[#202020] rounded-2xl px-5 py-7 space-y-4 relative hover:bg-[#232323] transition-colors">
					<ScanEyeIcon
						size={56}
						className="absolute -top-4 -right-4 stroke-2 stroke-primary"
					/>
					<h4 className="text-2xl font-bold">Report Anything Suspicious</h4>
					<p>
						If you see something unusual or unsafe, tell the event staff
						immediately.
					</p>
				</div>
			</div>
		</section>
	);
};

export default TipsLayout;
