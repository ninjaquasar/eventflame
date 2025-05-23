import React from "react";
import LoginBoxLayout from "../layouts/LoginBoxLayout";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
	return (
		<main className="px-6 sm:px-16 lg:px-24 2xl:px-28 my-20">
			<Helmet>
				<title>Login - EventFlame</title>
			</Helmet>
			<LoginBoxLayout />
		</main>
	);
};

export default LoginPage;
