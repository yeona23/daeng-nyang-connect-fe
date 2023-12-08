import { MainSection, MainSectionH2 } from './../Section.style';
import HorizentalCard from '../UI/HorizentalCard/HorizentalCard';
import { SalmonBtn } from '../UI/SalmonBtn/SalmonBtn.style';
import { CardListUl } from './SectionReview.style';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '../../../hooks/useResponsive';

const SectionReview = () => {
	const navigate = useNavigate();

	const { $isMaxWidth, $isMobile } = useResponsive();

	const moveToReview = () => {
		navigate('/adoptionReviews');
	};

	const reviewMorePadding = $isMobile ? '10px 80px' : '15px 100px';
	return (
		<MainSection $isMaxWidth={$isMaxWidth} $isMobile={$isMobile}>
			<MainSectionH2 $isMobile={$isMobile}>입양 후기</MainSectionH2>
			<CardListUl>
				<HorizentalCard $isMobile={$isMobile} />
				<HorizentalCard $isMobile={$isMobile} />
				<HorizentalCard $isMobile={$isMobile} />
			</CardListUl>
			<SalmonBtn
				padding={reviewMorePadding}
				onClick={moveToReview}
				$isMobile={$isMobile}>
				더보기
			</SalmonBtn>
		</MainSection>
	);
};

export default SectionReview;
