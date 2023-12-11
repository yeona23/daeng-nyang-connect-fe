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

export interface CommentForm {
	user_id: number;
	nickname: string;
	comment: string;
	created_at: string;
}

const getRandomDate = (): string => {
	const start = new Date(2020, 0, 1);
	const end = new Date();
	const randomDate = new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime()),
	);
	return randomDate.toISOString().split('T')[0];
};

const createRandomComments = (): CommentForm[] => {
	const comments: CommentForm[] = [];
	for (let i = 1; i <= 10; i++) {
		comments.push({
			user_id: i,
			nickname: `User${i}`,
			comment: `This is a comment ${i}`,
			created_at: getRandomDate(),
		});
	}
	return comments;
};

const TipDetail = () => {
	const commentsList = createRandomComments();
	const { $isMobile, $isTablet } = useResponsive();

	return (
		<div>
			<Title $isMobile={$isMobile} $isTablet={$isTablet}>
				동물 병원 도그마루 메디컬 센터
			</Title>
			<DetailUserNav />
			<TextBox>
				<Paragraph $isMobile={$isMobile} $isTablet={$isTablet}>
					동물병원 도그마루 메디컬센터 <br />- 강아지중성화수술
					고양이중성화수술비용 강아지피부병 강아지예방접종 강아지슬개골탈구증상
					강아지중성
					<br />
					동물병원 도그마루 메디컬센터 <br /> - 강아지중성화수술
					고양이중성화수술비용 강아지피부병 강아지예방접종 강아지슬개골탈구증상
					강아지중성 <br />
				</Paragraph>
			</TextBox>
			<CommentWrap $isMobile={$isMobile}>
				<SubTitle>댓글</SubTitle>
				<ul>
					{commentsList.map((list) => (
						<Comment key={list.user_id} list={list} />
					))}
				</ul>
				<RegisterCommentForm />
			</CommentWrap>
		</div>
	);
};

export default TipDetail;
