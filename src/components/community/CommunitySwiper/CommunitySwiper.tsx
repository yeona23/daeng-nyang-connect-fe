import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { ImgWrap, StyledSwiperWrapper } from './CommunitySwiper.style';

interface CommunitySwiperProps {
	images: string[];
}

const CommunitySwiper = ({ images }: CommunitySwiperProps) => {
	return (
		<StyledSwiperWrapper>
			<Swiper
				loop={true}
				slidesPerView={1}
				grabCursor={true}
				allowTouchMove={true}
				cssMode={false}
				navigation={true}
				modules={[Navigation, Mousewheel]}
				mousewheel={{ forceToAxis: true }}
				className="main-img-swiper">
				{images &&
					images.map((image, index) => (
						<SwiperSlide key={index}>
							<ImgWrap>
								<img src={image} />
							</ImgWrap>
						</SwiperSlide>
					))}
			</Swiper>
		</StyledSwiperWrapper>
	);
};

export default CommunitySwiper;
