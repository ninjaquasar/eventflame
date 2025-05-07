import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="bg-foreground text-background p-28 flex justify-between">
			<div className="space-y-4 self-center">
				<div className="flex items-center gap-x-3">
					<img
						src="https://i.ibb.co.com/MDyNGSKL/logo.png"
						alt="Logo"
						className="size-9"
					/>
					<h3 className="text-3xl font-bold">EventFlame</h3>
				</div>
				<p className="text-lg font-medium w-2/3">
					Light up your moments. Discover events that ignite your interest.
				</p>
			</div>
			<div className="space-y-4">
				<h5 className="text-xl font-bold">Contact</h5>
				<ul className="flex flex-col gap-y-2 font-medium">
					<li className="flex items-center gap-x-2">
						<PhoneIcon size={20} />
						<a
							href="tel:8801710243940"
							target="_blank"
							className="hover:text-purple-800"
						>
							+8801710243940
						</a>
					</li>
					<li className="flex items-center gap-x-2">
						<PhoneIcon size={20} />
						<a
							href="tel:880171754249"
							target="_blank"
							className="hover:text-purple-800"
						>
							+8801717549249
						</a>
					</li>
					<li className="flex items-center gap-x-2">
						<MailIcon size={20} />
						<a
							href="mailto:promahnaf@gmail.com"
							target="_blank"
							className="hover:text-purple-800"
						>
							promahnaf@gmail.com
						</a>
					</li>
				</ul>
			</div>
			<div className="space-y-4">
				<h5 className="text-xl font-bold">Legal</h5>
				<ul className="flex flex-col gap-y-2 font-medium">
					<li className="hover:text-purple-800">
						<Link
							to="/terms-and-conditions"
							target="_blank"
						>
							Terms and Conditions
						</Link>
					</li>
					<li className="hover:text-purple-800">
						<Link
							to="/privacy-policy"
							target="_blank"
						>
							Privacy Policy
						</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-4">
				<h5 className="text-xl font-bold">Pages</h5>
				<ul className="flex flex-col gap-y-2 font-medium">
					<li className="hover:text-purple-800">
						<Link
							to="/login"
							target="_blank"
						>
							Login
						</Link>
					</li>
					<li className="hover:text-purple-800">
						<Link
							to="/signup"
							target="_blank"
						>
							Sign Up
						</Link>
					</li>
					<li className="hover:text-purple-800">
						<Link
							to="/profile"
							target="_blank"
						>
							Profile
						</Link>
					</li>
					<li className="hover:text-purple-800">
						<Link
							to="/reset-password"
							target="_blank"
						>
							Reset Password
						</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-4">
				<h5 className="text-xl font-bold">Connect On</h5>
				<div className="flex gap-x-6">
					<a
						href="https://www.linkedin.com/in/riaurko"
						target="_blank"
						className="hover:-translate-y-1 hover:-rotate-6 transition-transform"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
							alt="LinkedIn"
							className="size-10"
						/>
					</a>
					<a
						href="https://www.facebook.com/riaurko"
						target="_blank"
						className="hover:-translate-y-1 hover:-rotate-6 transition-transform"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png"
							alt="Facebook"
							className="size-10"
						/>
					</a>
					<a
						href="https://github.com/riaurko"
						target="_blank"
						className="hover:-translate-y-1 hover:-rotate-6 transition-transform"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
							alt="GitHub"
							className="size-10"
						/>
					</a>
					<a
						href="https://x.com/riaurko"
						target="_blank"
						className="hover:-translate-y-1 hover:-rotate-6 transition-transform"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
							alt="X"
							className="size-10"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
