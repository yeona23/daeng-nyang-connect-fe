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
				delay: 2500,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			loop={true}
			modules={[Autoplay]}
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
