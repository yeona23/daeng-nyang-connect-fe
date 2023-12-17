import { useParams } from 'react-router-dom';
import { useResponsive } from '../../../../hooks/useResponsive';
import Comment from '../../../Comment/Comment';
import RegisterCommentForm from '../../../Comment/RegisterCommentForm';
import DetailUserNav from '../../DetailUserNav/DetailUserNav';
import {
	CommentWrap,
	Paragraph,
	SubTitle,
	TextBox,
	Title,
} from './TipDetail.style';
import { getBoard } from '../../../../api/communityApi';
import { useQuery } from 'react-query';
import { BoardDetail } from '../../../../types/BoardTypes';

const TipDetail = () => {
	const { $isMobile, $isTablet } = useResponsive();
	const { tipId } = useParams();

	const fetchGetDetailBoard = async (): Promise<BoardDetail> => {
		const response = await getBoard('tips', tipId);

		return response;
	};

	const { data } = useQuery<BoardDetail>('tipDetailBoard', fetchGetDetailBoard);

	return (
		<div>
			<Title $isMobile={$isMobile} $isTablet={$isTablet}>
				{data && data.title}
			</Title>
			<DetailUserNav />
			<TextBox>
				<Paragraph $isMobile={$isMobile} $isTablet={$isTablet}>
					{data && data.text}
				</Paragraph>
			</TextBox>
			<CommentWrap $isMobile={$isMobile}>
				<SubTitle>댓글</SubTitle>
				<ul>
					{data?.comments.map((list) => (
						<Comment key={list.commentsId} list={list} />
					))}
				</ul>
				<RegisterCommentForm />
			</CommentWrap>
		</div>
	);
};

export default TipDetail;
