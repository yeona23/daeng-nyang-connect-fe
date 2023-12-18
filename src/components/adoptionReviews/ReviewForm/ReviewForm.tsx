import { IoCloseOutline } from 'react-icons/io5';
import { useResponsive } from '../../../hooks/useResponsive';
import {
	CategoryTitle,
	FormText,
	PetRegistrationForm,
} from '../../newFamily/NewFamily.style';
import { useNavigate } from 'react-router-dom';

const ReviewForm = () => {
	const navigate = useNavigate();
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	const clickCloseBtnHandler = () => {
		const url = '/adoptionReviews';
		navigate(url);
	};
	return (
		<PetRegistrationForm
			$isMobile={$isMobile}
			$isTablet={$isTablet}
			$isPc={$isPc}
			$isMaxWidth={$isMaxWidth}>
			<CategoryTitle
				$isMobile={$isMobile}
				$isTablet={$isTablet}
				$isPc={$isPc}
				$isMaxWidth={$isMaxWidth}>
				<h1>입양 후기 등록하기</h1>
				<IoCloseOutline
					className="register-close-btn"
					size={25}
					onClick={clickCloseBtnHandler}
				/>
			</CategoryTitle>
			<div>
				<FormText
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}>
					<div>
						<h5>동물 이름</h5>
						<input type="text" name="animal_name" id="animal_name" required />
					</div>
					<div>
						<h5>나이</h5>
						<input type="text" name="age" id="age" required />
					</div>
					<div>
						<h5>이미지 등록</h5>
						<input type="file" name="img" id="img" required />
					</div>
					<div className="text-box">
						<h5>리뷰</h5>
						<textarea name="" id=""></textarea>
					</div>
				</FormText>
				<button type="submit">등록하기</button>
			</div>
		</PetRegistrationForm>
	);
};

export default ReviewForm;
