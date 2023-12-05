import DetailUserNav from '../../DetailUserNav/DetailUserNav';
import Comment from '../../../Comment/Comment';
import {
	CommentWrap,
	ImageAndTextWrap,
	ImageWrap,
	Place,
	PlaceWrap,
	SubTitle,
	TextBox,
} from './MateDetail.style';
import RegisterCommentForm from '../../../Comment/RegisterCommentForm';

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

	return (
		<div>
			<DetailUserNav />
			<ImageAndTextWrap>
				<ImageWrap>
					<img src="/assets/cat.jpeg" alt="" />
				</ImageWrap>
				<TextBox>
					<SubTitle>메이트 구하기</SubTitle>
					<PlaceWrap>
						지역 : <Place>서울</Place>
					</PlaceWrap>
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
