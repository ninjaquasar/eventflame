import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Hero = () => {
	return (
		<section className="my-4">
			<Swiper
				modules={[Navigation, Autoplay]}
				autoplay
				navigation
			>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/Vp2BcnjJ/conference.jpg)] h-[80vh] bg-cover bg-center flex flex-col justify-center px-20">
						<h1 className="text-5xl font-bold">Conferences</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/tTcXjRhG/summit.jpg)] h-[80vh] bg-cover bg-center flex flex-col justify-center px-20">
						<h1 className="text-5xl font-bold">Summits</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/0R0DmfcZ/webinar.jpg)] h-[80vh] bg-cover bg-center flex flex-col justify-center px-20">
						<h1 className="text-5xl font-bold text-background">Webinars</h1>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Hero;
