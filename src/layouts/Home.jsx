import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";

const Home = () => {
	return (
		<main>
			<Helmet>
				<title>Explore - EventFlame</title>
			</Helmet>
			<Hero />
		</main>
	);
};

export default Home;
