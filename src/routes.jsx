import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import Home from "./layouts/Home";
import SignUpPage from "./pages/SignUpPage";
import EventDetails from "./pages/EventDetails";
import ResetPassword from "./pages/ResetPassword";

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
		],
	},
]);

export default router;
