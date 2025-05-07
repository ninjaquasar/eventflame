import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import UpcomingEvents from "./UpcomingEvents";
import { useLoaderData } from "react-router";
import LogoClouds from "./LogoClouds";
import TipsLayout from "./TipsLayout";

const Home = () => {
	const eventsData = useLoaderData();
	return (
		<main className="mb-24">
			<Helmet>
				<title>Explore - EventFlame</title>
			</Helmet>
			<Hero />
			<LogoClouds />
			<UpcomingEvents eventsData={eventsData} />
			<TipsLayout />
		</main>
	);
};

export default Home;
