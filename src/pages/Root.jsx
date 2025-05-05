import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
	return (
		<Fragment>
			<ToastContainer />
			<Navbar />
			<Outlet />
		</Fragment>
	);
};

export default Root;
