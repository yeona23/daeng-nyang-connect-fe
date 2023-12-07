import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import VerticalCard from '../../UI/VerticalCard';
const FindNewList = () => {
	return (
		<Swiper
			slidesPerView={5}
			centeredSlides={true}
			autoplay={{
				delay: 1000,
				disableOnInteraction: false,
			}}
			loop={true}
			modules={[Autoplay]}
			speed={2000}
			className="mySwiper">
			<SwiperSlide>
				<VerticalCard />
			</SwiperSlide>
			<SwiperSlide>
				<VerticalCard />
			</SwiperSlide>
			<SwiperSlide>
				<VerticalCard />
			</SwiperSlide>
			<SwiperSlide>
				<VerticalCard />
			</SwiperSlide>
			<SwiperSlide>
				<VerticalCard />
			</SwiperSlide>
			<SwiperSlide>
				<VerticalCard />
			</SwiperSlide>
			<SwiperSlide>
				<VerticalCard />
			</SwiperSlide>
			<SwiperSlide>
				<VerticalCard />
			</SwiperSlide>
			<SwiperSlide>
				<VerticalCard />
			</SwiperSlide>
		</Swiper>
	);
};

export default FindNewList;
