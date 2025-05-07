import React from "react";
import InputWithLabel from "../components/Auth/InputWithLabel";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../config/firebase.config";
import { Slide, toast } from "react-toastify";
import { XIcon } from "lucide-react";

const ResetPassword = () => {
	const location = useLocation();
	const passedEmail = location.state?.email || "";
	const handleReset = (event) => {
		event.preventDefault();
		const email = event.target.userEmail.value;
		sendPasswordResetEmail(auth, email).then(() => {
			toast.info("We've sent you a password reset mail. Please reset your password.", {
				theme: "dark",
				position: "top-center",
				autoClose: 3000,
				closeOnClick: true,
				closeButton: <XIcon size={32} />,
				draggable: true,
				pauseOnHover: false,
				pauseOnFocusLoss: false,
				transition: Slide,
				style: {
					padding: "1rem",
					display: "flex",
					columnGap: "0.5rem",
					width: "25rem",
				},
			});
		});
	};
	return (
		<section className="mt-12 px-6 sm:px-16 lg:px-24 2xl:px-28">
			<Helmet>
				<title>Reset Password - EventFlame</title>
			</Helmet>
			<form
				onSubmit={handleReset}
				className="w-1/3 mx-auto bg-[#131313] border border-neutral-800 rounded-3xl p-8"
			>
				<InputWithLabel
					inputType="email"
					backendName="userEmail"
					isRequired={true}
					defaultValue={passedEmail}
				>
					Email
				</InputWithLabel>
				<button
					type="submit"
					className="w-full py-2 bg-primary rounded-xl text-xl font-medium mt-6 cursor-pointer"
				>
					Reset Password
				</button>
			</form>
		</section>
	);
};

export default ResetPassword;
