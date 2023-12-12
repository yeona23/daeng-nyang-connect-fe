import { useEffect, useState } from 'react';
import {
	CommentBox,
	CommentContainer,
	CommentInputContainer,
	CommentList,
	LikeContainer,
} from '../Reviews.style';
import { GoHeartFill } from 'react-icons/go';
import { useResponsive } from '../../../hooks/useResponsive';

interface Comment {
	text: string;
	author: string;
	time: Date;
	formattedTime: string;
}

const ReviewCommentBox: React.FC = () => {
	const [clickedLikeMark, setClickedLikeMark] = useState(false);
	const [commentText, setCommentText] = useState('');
	const [comments, setComments] = useState<Comment[]>([]);
	const [currentTime, setCurrentTime] = useState(new Date());
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	useEffect(() => {
		const intervalId = setInterval(() => {
			const current = new Date();
			setCurrentTime(current);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const clickLikeMarkHandler = () => {
		setClickedLikeMark((prev) => !prev);
	};

	const getLikeSize = () => {
		if ($isMobile) return 20;
		return 30;
	};

	const submitCommentHandler = () => {
		const newComment = {
			text: commentText,
			author: '작성자',
			time: new Date(),
			formattedTime: '방금 전',
		};

		setComments((prevComments) => [
			...prevComments,
			{
				...newComment,
				formattedTime: calculateElapsedTime(newComment.time, currentTime),
			},
		]);
		setCommentText('');
	};

	const calculateElapsedTime = (time: Date, current: Date) => {
		const elapsedTimeInSeconds = Math.floor(
			(current.getTime() - time.getTime()) / 1000,
		);

		if (elapsedTimeInSeconds < 0) {
			return '방금 전';
		} else if (elapsedTimeInSeconds < 60) {
			return `${elapsedTimeInSeconds}초 전`;
		} else if (elapsedTimeInSeconds < 3600) {
			const minutes = Math.floor(elapsedTimeInSeconds / 60);
			return `${minutes}분 전`;
		} else if (elapsedTimeInSeconds < 86400) {
			const hours = Math.floor(elapsedTimeInSeconds / 3600);
			return `${hours}시간 전`;
		} else {
			const options: Intl.DateTimeFormatOptions = {
				month: 'numeric',
				day: 'numeric',
			};
			return time.toLocaleDateString('ko-KR', options);
		}
	};

	return (
		<CommentContainer>
			<div>
				<CommentList
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}>
					{comments.map((comment, index) => (
						<CommentBox
							key={index}
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							<div>
								<img src="/assets/animal3.jpg" alt="" />
							</div>
							<h5>{comment.author}</h5>
							<p>{comment.text}</p>
							<span>{comment.formattedTime}</span>
						</CommentBox>
					))}
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
				<input
					type="text"
					name="comment"
					id=""
					placeholder="댓글달기"
					value={commentText}
					onChange={(e) => setCommentText(e.target.value)}
				/>
				<button type="submit" onClick={submitCommentHandler}>
					게시
				</button>
			</CommentInputContainer>
		</CommentContainer>
	);
};

export default ReviewCommentBox;
