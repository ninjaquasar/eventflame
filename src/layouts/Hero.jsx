import React from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Hero = () => {
	return (
		<section className="my-4">
			<Swiper
				modules={[Navigation, Autoplay, Scrollbar]}
				autoplay={{
					delay: 4000,
				}}
				navigation
				scrollbar={{
					draggable: true,
				}}
			>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/1fGY05Cy/eventflame.jpg)] h-[60vh] sm:h-[80vh] bg-cover bg-center flex flex-col justify-center px-12 md:px-20 text-[#F5820D]">
						<h3 className="text-2xl md:text-5xl font-bold max-md:mt-48">
							Light up your moments.
							<br />
							Discover events that
							<br />
							ignite your interest.
						</h3>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/Vp2BcnjJ/conference.jpg)] h-[60vh] sm:h-[80vh] bg-cover bg-center flex flex-col justify-center px-12 md:px-20 text-[#F5820D]">
						<h1 className="text-3xl md:text-5xl font-bold">Conferences</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/tTcXjRhG/summit.jpg)] h-[60vh] sm:h-[80vh] bg-cover bg-center flex flex-col justify-center px-12 md:px-20 text-[#F5820D]">
						<h1 className="text-3xl md:text-5xl font-bold">Summits</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/0R0DmfcZ/webinar.jpg)] h-[60vh] sm:h-[80vh] bg-cover bg-center flex flex-col justify-center px-12 md:px-20 text-[#F5820D]">
						<h1 className="text-3xl md:text-5xl font-bold">Webinars</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/KzqFwTn6/product-launch.jpg)] h-[60vh] sm:h-[80vh] bg-cover bg-center flex flex-col justify-center px-12 md:px-20 text-[#F5820D]">
						<h1 className="text-3xl md:text-5xl font-bold">Product Launches</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/1fpJjGqs/seminar.jpg)] h-[60vh] sm:h-[80vh] bg-cover bg-center flex flex-col justify-center px-12 md:px-20 text-[#F5820D]">
						<h1 className="text-3xl md:text-5xl font-bold">Seminars</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-[url(https://i.ibb.co.com/gZ5mYjPm/food-festival.jpg)] h-[60vh] sm:h-[80vh] bg-cover bg-center flex flex-col justify-center px-12 md:px-20 text-background">
						<h1 className="text-3xl md:text-5xl font-bold">Food Festivals</h1>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Hero;
