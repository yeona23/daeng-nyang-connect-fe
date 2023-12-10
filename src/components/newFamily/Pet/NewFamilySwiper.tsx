import { BsBookmarkFill } from 'react-icons/bs';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { DetailSwiper } from '../NewFamily.style';
import { useResponsive } from '../../../hooks/useResponsive';
SwiperCore.use([Autoplay]);
interface Item {
	id: number;
	index: number;
	itemTitle: string;
	age: string;
}

const generateImgUrl = (index: number): string => {
	const maxIndex = 4;
	const actualIndex = index <= maxIndex ? index : (index % maxIndex) + 1;
	return `/assets/animal${actualIndex}.jpg`;
};

const items: Item[] = Array.from({ length: 10 }, (_, index) => ({
	id: index + 1,
	index: index + 1,
	itemTitle: '냥냥',
	age: '3년 2개월',
}));

SwiperCore.use([Autoplay]);

const NewFamilySwiper = () => {
	const navigate = useNavigate();
	const [swiper, setSwiper] = useState<SwiperCore | null>(null);
	const [bookmarkState, setBookmarkState] = useState<{
		[key: number]: boolean;
	}>({});

	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	const clickBookmarkHandler = (itemId: number) => {
		setBookmarkState((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
	};

	const goToDetailPage = (petId: number, imageUrl: string) => {
		navigate(`/newFamily/pet/${petId}`, { state: { imageUrl } });
	};

	const initSwiper = (swiper: SwiperCore) => {
		setSwiper(swiper);
	};

	const mouseEnterHandler = () => {
		if (swiper) {
			swiper.autoplay.stop();
		}
	};
	const mouseLeaveHandler = () => {
		if (swiper) {
			swiper.autoplay.start();
		}
	};

	return (
		<DetailSwiper
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}>
			<Swiper
				loop={true}
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				speed={3500}
				spaceBetween={30}
				slidesPerView={$isMaxWidth ? 5 : 4}
				slidesPerGroup={1}
				slidesPerGroupSkip={1}
				freeMode={true}
				grabCursor={true}
				allowTouchMove={true}
				modules={[Autoplay]}
				onSwiper={initSwiper}
				className="swiper">
				{items.map((item: Item) => (
					<SwiperSlide
						key={item.id}
						className="swiper-slide"
						onClick={() => goToDetailPage(item.id, generateImgUrl(item.index))}>
						<div>
							<img src={generateImgUrl(item.index)} alt="" />
							<BsBookmarkFill
								color={
									bookmarkState[item.id]
										? 'var(--color-light-salmon)'
										: '#ffffff70'
								}
								size={30}
								onClick={(e) => {
									e.stopPropagation();
									clickBookmarkHandler(item.id);
								}}
							/>
						</div>
						<div>
							<p>이름 : {item.itemTitle}</p>
							<p>나이 : {item.age}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</DetailSwiper>
	);
};

export default NewFamilySwiper;
