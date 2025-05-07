import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { EyeClosedIcon, EyeIcon, XIcon } from "lucide-react";
import { Bounce, Slide, toast } from "react-toastify";
import auth from "../../../config/firebase.config";
import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from "firebase/auth";

// spidey@avengers.team
// WebClimb#3

const SignUpForm = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const handlePasswordLogin = (event) => {
		event.preventDefault();
		const name = event.target.userName.value;
		const photoURL = event.target.userPhoto.value;
		const email = event.target.userEmail.value;
		const password = event.target.userPassword.value;
		if (handleValidateFields(password, photoURL)) {
			event.target.userName.value = "";
			event.target.userPhoto.value = "";
			event.target.userEmail.value = "";
			event.target.userPassword.value = "";
			createUserWithEmailAndPassword(auth, email, password)
				.then((signupInfo) => {
					const userInfo = signupInfo.user;
					console.log(userInfo);
					const profile = {
						displayName: name,
						photoURL: photoURL,
					};
					updateProfile(auth.currentUser, profile)
						.then(() => {
							console.log("User Profile updated when Signing Up");
						})
						.catch((error) => console.log(error.message));
					sendEmailVerification(auth.currentUser)
						.then(() => {
							toast.info(
								"We've sent you a verification mail. Please verify your email.",
								{
									theme: "dark",
									position: "top-center",
									autoClose: 4000,
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
								},
							);
						})
						.catch((error) => {
							console.log(error.message);
						});
				})
				.catch((error) => {
					console.log(error.message);
				});
		}
	};
	const handleValidateFields = (password = "", photoURL = "") => {
		if (!password) {
			toast.error("Password cannot be empty. (no-password)", {
				theme: "dark",
				position: "top-center",
				autoClose: 3000,
				closeOnClick: true,
				closeButton: <XIcon size={24} />,
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
			return false;
		}
		const checkScheme = /^https:\/\/[^\s]+$/;
		const checkLength = /^.{6,}$/;
		const checkLowercase = /(?=.*[a-z])/;
		const checkUppercase = /(?=.*[A-Z])/;
		const checkDigit = /(?=.*[0-9])/;
		const checkSymbol = /(?=.*[^a-zA-Z0-9])/;
		if (!checkScheme.test(photoURL)) {
			toast.error("Invalid Photo URL. (invalid-photourl)", {
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
			return false;
		} else if (!checkLength.test(password)) {
			toast.error("Password must contain at least 6 characters. (weak-password)", {
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
			return false;
		} else if (!checkLowercase.test(password)) {
			toast.error("Password must include at least 1 lowercase letter. (weak-password)", {
				theme: "dark",
				position: "top-center",
				autoClose: 3000,
				closeOnClick: true,
				closeButton: <XIcon size={24} />,
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
			return false;
		} else if (!checkUppercase.test(password)) {
			toast.error("Password must include at least 1 uppercase letter. (weak-password)", {
				theme: "dark",
				position: "top-center",
				autoClose: 3000,
				closeOnClick: true,
				closeButton: <XIcon size={24} />,
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
			return false;
		} else if (!checkDigit.test(password)) {
			toast.error("Password must include at least 1 digit. (weak-password)", {
				theme: "dark",
				position: "top-center",
				autoClose: 3000,
				closeOnClick: true,
				closeButton: <XIcon size={24} />,
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
			return false;
		} else if (!checkSymbol.test(password)) {
			toast.error("Password must include at least 1 symbol. (medium-password)", {
				theme: "dark",
				position: "top-center",
				autoClose: 3000,
				closeOnClick: true,
				closeButton: <XIcon size={24} />,
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
			return false;
		} else {
			toast.success("Successfully created the account! (strong-password, authorized)", {
				theme: "dark",
				position: "top-center",
				autoClose: 3500,
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
			return true;
		}
	};
	return (
		<form
			onSubmit={handlePasswordLogin}
			className="flex flex-col gap-y-6"
		>
			<InputWithLabel
				inputType="text"
				backendName="userName"
				isRequired={true}
			>
				Name
			</InputWithLabel>
			<InputWithLabel
				inputType="url"
				backendName="userPhoto"
				isRequired={false}
				noValidate={true}
			>
				Photo URL
			</InputWithLabel>
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
				Sign Up
			</button>
		</form>
	);
};

export default SignUpForm;
