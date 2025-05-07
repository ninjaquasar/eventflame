import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../layouts/Footer";

const Root = () => {
	return (
		<Fragment>
			<ToastContainer />
			<Navbar />
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default Root;
