import { IoCloseOutline } from 'react-icons/io5';
import { useResponsive } from '../../../hooks/useResponsive';
import {
	CategoryTitle,
	FormText,
	PetRegistrationForm,
} from '../../newFamily/NewFamily.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { reviewPost } from '../../../api/reviewApi';

interface ReviewInfo {
	files: File[];
	textReview: string;
}

const ReviewForm = () => {
	const navigate = useNavigate();
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();
	const [reviewInfo, setReviewInfo] = useState<ReviewInfo>({
		files: [],
		textReview: '',
	});

	const clickCloseBtnHandler = () => {
		const url = '/adoptionReviews';
		navigate(url);
	};

	const imgInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const uploadfiles = Array.from(e.target.files);
			setReviewInfo((prev: ReviewInfo) => {
				return { ...prev, files: uploadfiles };
			});
		}
	};

	const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setReviewInfo((prev: ReviewInfo) => {
			return { ...prev, textReview: e.target.value };
		});
	};

	const reviewRegisterHandler = (e: React.FormEvent) => {
		const id = 48;
		e.preventDefault();
		reviewPost(reviewInfo, id);
	};

	return (
		<PetRegistrationForm
			$isMobile={$isMobile}
			$isTablet={$isTablet}
			$isPc={$isPc}
			$isMaxWidth={$isMaxWidth}
			onSubmit={reviewRegisterHandler}>
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
						<input type="text" name="animal_name" id="animal_name" />
					</div>
					<div>
						<h5>나이</h5>
						<input type="text" name="age" id="age" required />
					</div>
					<div>
						<h5>이미지 등록</h5>
						<input
							type="file"
							name="files"
							id="files"
							required
							multiple
							onChange={imgInputChangeHandler}
						/>
					</div>
					<div className="text-box">
						<h5>후기</h5>
						<textarea
							name="adoptionReview"
							id=""
							onChange={textAreaHandler}></textarea>
					</div>
				</FormText>
				<button>등록하기</button>
			</div>
		</PetRegistrationForm>
	);
};

export default ReviewForm;
