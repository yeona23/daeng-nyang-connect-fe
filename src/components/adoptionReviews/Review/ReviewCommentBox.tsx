import { useState } from 'react';
import {
	CommentBox,
	CommentContainer,
	CommentInputContainer,
	CommentList,
	LikeContainer,
} from '../Reviews.style';
import { GoHeartFill } from 'react-icons/go';

const ReviewCommentBox = () => {
	const [clickedLikeMark, setClickedLikeMark] = useState(false);

	const clickLikeMarkHandler = () => {
		setClickedLikeMark((prev) => !prev);
	};
	return (
		<CommentContainer>
			<div>
				<CommentList>
					<CommentBox>
						<div>
							<img src="/assets/animal3.jpg" alt="" />
						</div>
						<h5>nadozipsa</h5>
						<p>🧡🧡🧡🧡🧡🧡</p>
						<span>2시간전</span>
					</CommentBox>
				</CommentList>
				<LikeContainer>
					<GoHeartFill
						color={
							clickedLikeMark
								? 'var(--color-light-salmon)'
								: 'var(--color-light-blue'
						}
						size={30}
						onClick={clickLikeMarkHandler}
					/>
					<p>좋아요 213개</p>
				</LikeContainer>
			</div>
			<CommentInputContainer>
				<input type="text" name="comment" id="" placeholder="댓글달기" />
				<button type="submit">게시</button>
			</CommentInputContainer>
		</CommentContainer>
	);
};

export default ReviewCommentBox;
