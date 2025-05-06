import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../config/firebase.config";
import { Bounce, Slide, toast } from "react-toastify";
import { XIcon } from "lucide-react";

const GoogleLogin = () => {
	const provider = new GoogleAuthProvider();
	const handleGoogleLogin = () => {
		signInWithPopup(auth, provider)
			.then(() => {
				toast.success("Successfully logged in! (authenticated-by-google)", {
					theme: "dark",
					position: "top-center",
					autoClose: 3000,
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
			})
			.catch((error) => {
				let cleanMessage = error.message.replace(/^Firebase:\s*/, "");
				cleanMessage = cleanMessage.replace(/\s*\(.*?\)/g, "");
				toast.error(cleanMessage, {
					theme: "dark",
					position: "top-center",
					autoClose: 3000,
					closeOnClick: true,
					closeButton: <XIcon />,
					hideProgressBar: true,
					draggable: true,
					pauseOnHover: false,
					pauseOnFocusLoss: false,
					transition: Bounce,
					style: {
						padding: "1rem",
						display: "flex",
						columnGap: "1rem",
						width: "25rem",
					},
				});
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
