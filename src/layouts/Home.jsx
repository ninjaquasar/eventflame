import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import UpcomingEvents from "./UpcomingEvents";
import { useLoaderData } from "react-router";

const Home = () => {
	const eventsData = useLoaderData();
	return (
		<main>
			<Helmet>
				<title>Explore - EventFlame</title>
			</Helmet>
			<Hero />
			<UpcomingEvents eventsData={eventsData} />
		</main>
	);
};

export default Home;
