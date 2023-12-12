import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import VerticalCard from '../../UI/VerticalCard/VerticalCard';
import { useResponsive } from '../../../../hooks/useResponsive';
const FindNewList = () => {
	const { $isMaxWidth, $isMobile, $isTablet } = useResponsive();
	const sildePerView = $isMobile ? 1 : $isTablet ? 2 : $isMaxWidth ? 3 : 5;
	return (
		<Swiper
			slidesPerView={sildePerView}
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
				<VerticalCard $isMobile={$isMobile} />
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
