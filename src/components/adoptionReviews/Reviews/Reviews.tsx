import { useNavigate } from 'react-router-dom';
import { CategoryTitle } from '../../newFamily/NewFamily.style';
import { ReviewsContainer } from '../Reviews.style';
import ReviewList from './ReviewList';
import { useResponsive } from '../../../hooks/useResponsive';

const Reviews = () => {
	const navigate = useNavigate();

	const goToReviewForm = () => {
		navigate('reviewForm');
	};

	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();
	return (
		<ReviewsContainer>
			<CategoryTitle
				$isMobile={$isMobile}
				$isTablet={$isTablet}
				$isPc={$isPc}
				$isMaxWidth={$isMaxWidth}>
				<h1>입양 후기</h1>
				<button onClick={goToReviewForm}>등록하기</button>
			</CategoryTitle>
			<ReviewList />
		</ReviewsContainer>
	);
};

export default Reviews;
