import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { EyeClosedIcon, EyeIcon, XIcon } from "lucide-react";
import { Bounce, Slide, toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../config/firebase.config";

const LoginForm = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const handlePasswordLogin = (event) => {
		event.preventDefault();
		const email = event.target.userEmail.value;
		const password = event.target.userPassword.value;
		signInWithEmailAndPassword(auth, email, password)
			.then((loginInfo) => {
				const userInfo = loginInfo.user;
				console.log(userInfo);
				if (!userInfo.emailVerified)
					toast.warning("Email is not verified. (unverified-email)", {
						theme: "dark",
						position: "top-center",
						autoClose: 3500,
						closeOnClick: true,
						closeButton: <XIcon size={32} />,
						hideProgressBar: true,
						draggable: true,
						pauseOnHover: false,
						pauseOnFocusLoss: false,
						transition: Bounce,
						style: {
							padding: "1rem",
							display: "flex",
							columnGap: "0.5rem",
							width: "25rem",
						},
					});
				else {
					toast.success("Successfully logged in! (strong-password, authenticated)", {
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
					event.target.userEmail.value = "";
					event.target.userPassword.value = "";
				}
			})
			.catch((error) => {
				if (error.code === "auth/invalid-credential")
					toast.error(
						"No user found with the given credential. (invalid-credential)",
						{
							theme: "dark",
							position: "top-center",
							autoClose: 3500,
							closeOnClick: true,
							closeButton: <XIcon size={32} />,
							hideProgressBar: true,
							draggable: true,
							pauseOnHover: false,
							pauseOnFocusLoss: false,
							transition: Bounce,
							style: {
								padding: "1rem",
								display: "flex",
								columnGap: "0.5rem",
								width: "25rem",
							},
						},
					);
				else console.log(error.message);
			});
	};
	return (
		<form
			onSubmit={handlePasswordLogin}
			className="flex flex-col gap-y-6"
		>
			<InputWithLabel
				inputType="email"
				backendName="userEmail"
				isRequired={true}
			>
				Email
			</InputWithLabel>
			<div className="relative">
				<InputWithLabel
					inputType={passwordVisible ? "text" : "password"}
					backendName="userPassword"
					isRequired={false}
				>
					Password
				</InputWithLabel>
				<button
					type="button"
					className="absolute rounded-lg p-2 top-10 right-1 cursor-pointer hover:bg-[#101010]"
					onClick={() => setPasswordVisible(!passwordVisible)}
				>
					{passwordVisible ? (
						<EyeClosedIcon
							color="var(--color-primary)"
							className="size-8"
						/>
					) : (
						<EyeIcon
							color="var(--color-primary)"
							className="size-8"
						/>
					)}
				</button>
			</div>
			<button
				type="submit"
				className="w-full py-2 text-2xl font-bold bg-primary rounded-full cursor-pointer"
			>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
