import React from "react";
import { Link } from "react-router";
import LoginForm from "../components/Auth/LoginForm";
import GoogleLogin from "../components/Auth/GoogleLogin";

const LoginBoxLayout = () => {
	return (
		<div className="max-w-full md:max-w-11/12 lg:max-w-3/5 2xl:max-w-2/5 mx-auto px-6 py-8 sm:p-12 border border-primary rounded-2xl md:rounded-3xl space-y-8">
			<h2 className="text-4xl font-bold text-center text-purple-200 drop-shadow-[0_0_0.75rem_#6633aa]">
				Login
			</h2>
			<LoginForm />
			<hr className="text-primary/75 size my-8" />
			<GoogleLogin />
			<h6 className="text-sm sm:text-lg font-medium text-center mt-12">
				New here? Create a new account (
				<Link
					to="/signup"
					className="text-primary font-semibold underline underline-offset-2"
				>
					Sign Up
				</Link>
				) please!
			</h6>
		</div>
	);
};

export default LoginBoxLayout;
