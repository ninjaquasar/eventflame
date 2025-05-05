import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { EyeClosedIcon, EyeIcon, XIcon } from "lucide-react";
import { Bounce, toast } from "react-toastify";

const LoginForm = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const handlePasswordLogin = (event) => {
		event.preventDefault();
		const email = event.target.userEmail.value;
		const password = event.target.userPassword.value;
		handleValidatePassword(password);
		event.target.userEmail.value = "";
		event.target.userPassword.value = "";
	};
	const handleValidatePassword = (password) => {
		const checkLength = /^.{6,}$/;
		const checkLowercase = /(?=.*[a-z])/;
		const checkUppercase = /(?=.*[A-Z])/;
		const checkDigit = /(?=.*[0-9])/;
		const checkSymbol = /(?=.*[^a-zA-Z0-9])/;
		if (!checkLength.test(password))
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
		else if (!checkLowercase.test(password))
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
		else if (!checkUppercase.test(password))
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
		else if (!checkDigit.test(password))
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
		else if (!checkSymbol.test(password))
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
		else
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
	};
	return (
		<form
			onSubmit={handlePasswordLogin}
			className="flex flex-col gap-y-6"
		>
			<InputWithLabel
				inputType="email"
				backendName="userEmail"
				isRequired={false}
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
