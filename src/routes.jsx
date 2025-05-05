import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				path: "/login",
				Component: LoginPage,
			},
		],
	},
]);

export default router;
