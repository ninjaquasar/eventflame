import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { EyeClosedIcon, EyeIcon, XIcon } from "lucide-react";
import { Bounce, Slide, toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../config/firebase.config";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const LoginForm = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const { register, getValues, reset } = useForm();
	const navigate = useNavigate();
	const handlePasswordLogin = (event) => {
		event.preventDefault();
		const email = getValues("email");
		const password = event.target.password.value;
		signInWithEmailAndPassword(auth, email, password)
			.then((loginInfo) => {
				const userInfo = loginInfo.user;
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
					toast.success("Successfully logged in! (user-authenticated)", {
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
					reset();
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
				else if (error.code === "auth/missing-password")
					toast.error("Password is missing. (missing-password)", {
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
				else console.log(error.message);
			});
	};
	return (
		<form
			onSubmit={handlePasswordLogin}
			className="flex flex-col gap-y-6"
		>
			<label className="text-xl md:text-2xl font-medium">
				Email
				<input
					type="email"
					name="email"
					required
					className="mt-1 w-full p-3 text-xl font-normal rounded-lg border border-neutral-800 caret-primary focus:outline-none focus:bg-[#121212] focus:border-primary"
					placeholder="Type the Email here..."
					{...register("email")}
				/>
			</label>
			<div className="relative">
				<InputWithLabel
					inputType={passwordVisible ? "text" : "password"}
					backendName="password"
					isRequired={false}
				>
					Password
				</InputWithLabel>
				<p className="absolute top-1 right-0 font-medium text-primary">
					<button
						type="button"
						className="cursor-pointer"
						onClick={() => {
							const email = getValues("email");
							navigate("/reset-password", { state: { email } });
						}}
					>
						Forgot Password?
					</button>
				</p>
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
