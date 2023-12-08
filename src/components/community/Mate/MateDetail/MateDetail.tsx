import DetailUserNav from '../../DetailUserNav/DetailUserNav';
import Comment from '../../../Comment/Comment';
import {
	CommentWrap,
	Description,
	ImageAndTextWrap,
	ImageWrap,
	Place,
	PlaceWrap,
	SubTitle,
	TextBox,
} from './MateDetail.style';
import RegisterCommentForm from '../../../Comment/RegisterCommentForm';
import { useResponsive } from '../../../../hooks/useResponsive';
import CommunitySwiper from '../../CommunitySwiper/CommunitySwiper';

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

const MateDetail = () => {
	const commentsList = createRandomComments();
	const images = ['/assets/cat.jpeg', '/assets/cat.jpeg'];

	const { $isTablet, $isMobile } = useResponsive();

	return (
		<div>
			<DetailUserNav />
			<ImageAndTextWrap $isMobile={$isMobile} $isTablet={$isTablet}>
				<ImageWrap $isMobile={$isMobile} $isTablet={$isTablet}>
					<CommunitySwiper images={images} />
				</ImageWrap>
				<TextBox $isMobile={$isMobile} $isTablet={$isTablet}>
					<SubTitle>메이트 구하기</SubTitle>
					<PlaceWrap>
						<Description>지역</Description>
						<Place>서울</Place>
					</PlaceWrap>
					<Description>상세 설명</Description>
					<p>서울 강서구에서 같이 산책 하실 메이트 구해요</p>
				</TextBox>
			</ImageAndTextWrap>
			<CommentWrap>
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

export default MateDetail;
