import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoHeartFill, GoHeart } from 'react-icons/go';
import { ButtonBox, ReviewBox, ReviewsList } from '../Reviews.style';
import { useResponsive } from '../../../hooks/useResponsive';
import { useDispatch } from 'react-redux';

interface Item {
	id: number;
	index: number;
	name: string;
	content: string;
}

const generateImgUrl = (index: number) => {
	const maxIndex = 4;
	const actualIndex = index <= maxIndex ? index : (index % maxIndex) + 1;
	return `/assets/animal${actualIndex}.jpg`;
};

const ReviewList = () => {
	const navigate = useNavigate();

	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	const items: Item[] = Array.from({ length: 12 }, (_, index) => ({
		id: index + 1,
		index: index + 1,
		name: '멍멍',
		content:
			'fbshgbysGbsdyfugsYFUgbsFUYgbsdugbsjgbJSHGBsjhdgbgbsfdjhgbfjdsgbfjhbhgjbsvjhbsfhjvbsdfhjbvhfbjhsfbvjshdvbgjhsfvhjdsgvsdhfjvshfvsdhfjvhdfvhfvdfgdsuvhbzdsiouguisdhviuzshgviuSDHGweuisviuswegviuhguighvuiszegduivguweisfgvusidfghsuidgvewiufgvuisGFiudsgfiusdgvbvsUYFgyu',
	}));

	const [likeState, setLikeState] = useState<{
		[key: number]: boolean;
	}>({});

	const clickLikeHandler = (itemId: number) => {
		setLikeState((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
	};

	const goToReviewPage = (reviewId: number, imageUrl: string) => {
		navigate(`/adoptionReviews/review/${reviewId}`, { state: { imageUrl } });
	};

	return (
		<ReviewsList
			$isMobile={$isMobile}
			$isTablet={$isTablet}
			$isPc={$isPc}
			$isMaxWidth={$isMaxWidth}>
			{items.map((item: Item) => (
				<ReviewBox
					key={item.id}
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}
					onClick={() => goToReviewPage(item.id, generateImgUrl(item.index))}>
					<div>
						<img src={generateImgUrl(item.index)} alt={`adoption${item.id}`} />
					</div>
					<div>
						<div>
							<p>이름 : {item.name}</p>
							<p>{item.content}</p>
						</div>
						<ButtonBox>
							<GoHeartFill
								color={
									likeState[item.id]
										? 'var(--color-light-salmon)'
										: 'var(--color-light-blue)'
								}
								size={30}
								onClick={(e) => {
									e.stopPropagation();
									clickLikeHandler(item.id);
								}}
							/>
							<button
								onClick={(e) => {
									e.stopPropagation;
									goToReviewPage(item.id, generateImgUrl(item.index));
								}}>
								자세히 보기
							</button>
						</ButtonBox>
					</div>
				</ReviewBox>
			))}
		</ReviewsList>
	);
};

export default ReviewList;
