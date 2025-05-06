import React from "react";
import SignUpBoxLayout from "../layouts/SignUpBoxLayout";
import { Helmet } from "react-helmet-async";

const SignUpPage = () => {
	return (
		<main className="px-6 sm:px-16 lg:px-24 2xl:px-28 my-20">
			<Helmet>
				<title>Sign Up - EventFlame</title>
			</Helmet>
			<SignUpBoxLayout />
		</main>
	);
};

export default SignUpPage;
