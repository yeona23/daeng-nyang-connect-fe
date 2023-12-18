import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import VerticalCard from '../../UI/VerticalCard/VerticalCard';
import { useResponsive } from '../../../../hooks/useResponsive';
import { useEffect, useState } from 'react';
import { getNewFamily } from '../../../../api/newFamilyApi';

interface AnimalType {
	boardId: number;
	animalName: string;
	age: string;
	images: string[];
}

const FindNewList = () => {
	const { $isMaxWidth, $isMobile, $isTablet } = useResponsive();
	const sildePerView = $isMobile ? 1 : $isTablet ? 2 : $isMaxWidth ? 3 : 5;
	const [newFamilyData, setNewFamilyData] = useState<AnimalType[]>([]);

	const fetchNewFamily = async () => {
		try {
			const response = await getNewFamily();
			setNewFamilyData(response as AnimalType[]);
		} catch (err) {
			console.error('error', err);
		}
	};
	useEffect(() => {
		fetchNewFamily();
	}, []);

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
			{newFamilyData &&
				newFamilyData.map((data: AnimalType, index) => (
					<SwiperSlide key={index}>
						<VerticalCard data={data} $isMobile={$isMobile} />
					</SwiperSlide>
				))}
		</Swiper>
	);
};

export default FindNewList;
