import Comment from '../../../Comment/Comment';
import RegisterCommentForm from '../../../Comment/RegisterCommentForm';
import DetailUserNav from '../../DetailUserNav/DetailUserNav';
import {
	CommentWrap,
	ImageAndTextWrap,
	ImageWrap,
	SubTitle,
	TextBox,
} from './MyPetDetail.style';

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

const MyPetDetail = () => {
	const commentsList = createRandomComments();

	return (
		<div>
			<DetailUserNav />
			<ImageAndTextWrap>
				<ImageWrap>
					<img src="/assets/cat.jpeg" alt="" />
				</ImageWrap>
				<TextBox>
					<h3>자랑하기</h3>
					<p>내 고양이는 요...</p>
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

export default MyPetDetail;

[
	{
		mypet_board_id: 1,
		user_id: 1,
		user_thumbnail: 'url',
		kind: 'cat',
		nickname: '',
		text: '내 고양이는 요..',
		images: [],
		likes: [],
		comments: [],
		created_at: '2023-10-08',
	},
];
