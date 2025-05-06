import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import Home from "./layouts/Home";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/login",
				Component: LoginPage,
			},
			{
				path: "/signup",
				Component: SignUpPage,
			},
		],
	},
]);

export default router;
