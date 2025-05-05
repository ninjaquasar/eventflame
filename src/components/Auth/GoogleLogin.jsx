import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../config/firebase.config";

const GoogleLogin = () => {
	const provider = new GoogleAuthProvider();
	const handleGoogleLogin = () => {
		signInWithPopup(auth, provider)
			.then((info) => {
				console.log(info.user.displayName, "-", info.user.email);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<button
			type="button"
			className="mx-auto w-full md:w-3/5 py-3 rounded-full flex justify-center items-center gap-x-4 md:gap-x-6 bg-[#0a0a0a] text-xl md:text-2xl font-medium cursor-pointer"
			onClick={handleGoogleLogin}
		>
			<img
				src="https://i.ibb.co.com/N20bTHFF/google.png"
				alt="Google"
				className="size-6 md:size-7"
			/>
			Login with Google
		</button>
	);
};

export default GoogleLogin;
