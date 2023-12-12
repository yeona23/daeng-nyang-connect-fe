import { useResponsive } from '../../../../hooks/useResponsive';
import Comment from '../../../Comment/Comment';
import RegisterCommentForm from '../../../Comment/RegisterCommentForm';
import CommunitySwiper from '../../CommunitySwiper/CommunitySwiper';
import DetailUserNav from '../../DetailUserNav/DetailUserNav';
import {
	CommentWrap,
	Description,
	ImageAndTextWrap,
	ImageWrap,
	Text,
	SubTitle,
	TextBox,
	DescriptionSpan,
} from './LostDetail.style';

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

[
	{
		load_board_id: 1,
		user_id: 3,
		user_thumbnail: 'url',
		category: '',
		place: '경기도 안산시 상록구',
		reward: 100000,
		phone: '010-0000-0001',
		kind: 'cat', // 강아지, 고양이, 그 외 반려동물
		breed: '', // 품종
		gender: 'male',
		color: 'white',
		lost_date: '2023.11.07',
		lost_time: '오후 02:12',
		created_at: '2023.11.08',
		text: '',
		images: [],
		comments: [],
	},
];

const LostDetail = () => {
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
					<SubTitle>잃어버린 가족을 찾아주세요!</SubTitle>
					<div>
						<Description $isMobile={$isMobile} $isTablet={$isTablet}>
							잃어버린 지역
						</Description>
						<Text $isMobile={$isMobile} $isTablet={$isTablet}>
							서울 강서구
						</Text>
					</div>
					<div>
						<Description $isMobile={$isMobile} $isTablet={$isTablet}>
							잃어버린 날짜
						</Description>
						<Text $isMobile={$isMobile} $isTablet={$isTablet}>
							2023-10-23
						</Text>
					</div>
					<div>
						<Description $isMobile={$isMobile} $isTablet={$isTablet}>
							잃어버린 시간
						</Description>
						<Text $isMobile={$isMobile} $isTablet={$isTablet}>
							오후 10시 30분
						</Text>
					</div>
					<div>
						<Description $isMobile={$isMobile} $isTablet={$isTablet}>
							사례금
						</Description>
						<Text $isMobile={$isMobile} $isTablet={$isTablet}>
							100,000
						</Text>
					</div>
					<div>
						<Description $isMobile={$isMobile} $isTablet={$isTablet}>
							전화번호
						</Description>
						<Text $isMobile={$isMobile} $isTablet={$isTablet}>
							010-0000-0001
						</Text>
					</div>
					<div>
						<Description $isMobile={$isMobile} $isTablet={$isTablet}>
							종류 및 품종
						</Description>
						<Text $isMobile={$isMobile} $isTablet={$isTablet}>
							<div>고양이</div>
							<div>, </div>
							<div>페르시안</div>
						</Text>
					</div>
					<div>
						<Description $isMobile={$isMobile} $isTablet={$isTablet}>
							성별
						</Description>
						<Text $isMobile={$isMobile} $isTablet={$isTablet}>
							여자
						</Text>
					</div>
					<div>
						<Description $isMobile={$isMobile} $isTablet={$isTablet}>
							색깔
						</Description>
						<Text $isMobile={$isMobile} $isTablet={$isTablet}>
							흰색
						</Text>
					</div>
					<DescriptionSpan $isMobile={$isMobile} $isTablet={$isTablet}>
						상세 설명
					</DescriptionSpan>
					<p>강서구 초록마을로 144번길 근처 버스 정류장에서 잃어버렸어요ㅜ</p>
				</TextBox>
			</ImageAndTextWrap>
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

export default LostDetail;
