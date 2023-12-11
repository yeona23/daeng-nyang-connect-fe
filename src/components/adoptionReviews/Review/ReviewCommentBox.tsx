import { useState } from 'react';
import {
	CommentBox,
	CommentContainer,
	CommentInputContainer,
	CommentList,
	LikeContainer,
} from '../Reviews.style';
import { GoHeartFill } from 'react-icons/go';
import { useResponsive } from '../../../hooks/useResponsive';

const ReviewCommentBox = () => {
	const [clickedLikeMark, setClickedLikeMark] = useState(false);
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	const clickLikeMarkHandler = () => {
		setClickedLikeMark((prev) => !prev);
	};

	const getLikeSize = () => {
		if ($isMobile) return 20;
		if ($isTablet) return 30;
		if ($isPc) return 30;
	};
	return (
		<CommentContainer>
			<div>
				<CommentList
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}>
					<CommentBox
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						<div>
							<img src="/assets/animal3.jpg" alt="" />
						</div>
						<h5>nadozipsa</h5>
						<p>🧡🧡🧡🧡🧡🧡</p>
						<span>2시간전</span>
					</CommentBox>
				</CommentList>
				<LikeContainer
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}>
					<GoHeartFill
						color={
							clickedLikeMark
								? 'var(--color-light-salmon)'
								: 'var(--color-light-blue'
						}
						size={getLikeSize()}
						onClick={clickLikeMarkHandler}
					/>
					<p>좋아요 213개</p>
				</LikeContainer>
			</div>
			<CommentInputContainer
				$isMobile={$isMobile}
				$isTablet={$isTablet}
				$isPc={$isPc}
				$isMaxWidth={$isMaxWidth}>
				<input type="text" name="comment" id="" placeholder="댓글달기" />
				<button type="submit">게시</button>
			</CommentInputContainer>
		</CommentContainer>
	);
};

export default ReviewCommentBox;
