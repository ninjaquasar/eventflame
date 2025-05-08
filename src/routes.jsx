import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import Home from "./layouts/Home";
import SignUpPage from "./pages/SignUpPage";
import EventDetails from "./pages/EventDetails";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
				loader: () => fetch("/eventData.json"),
			},
			{
				path: "/login",
				Component: LoginPage,
			},
			{
				path: "/signup",
				Component: SignUpPage,
			},
			{
				path: "/:event_id",
				Component: EventDetails,
				loader: () => fetch("/eventData.json"),
			},
			{
				path: "/reset-password",
				Component: ResetPassword,
			},
			{
				path: "/privacy-policy",
				Component: PrivacyPolicy,
			},
			{
				path: "/terms-conditions",
				Component: TermsAndConditions,
			},
		],
	},
]);

export default router;
