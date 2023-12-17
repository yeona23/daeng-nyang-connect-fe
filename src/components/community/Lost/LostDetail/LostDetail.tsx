import { useParams } from 'react-router-dom';
import { getBoard } from '../../../../api/communityApi';
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
import { useQuery } from 'react-query';

const LostDetail = () => {
	const { $isTablet, $isMobile } = useResponsive();

	const { lostId } = useParams();

	const fetchGetDetailBoard = async () => {
		const response = await getBoard('lost', lostId);

		return response;
	};

	const { data } = useQuery('myPetDetailBoard', fetchGetDetailBoard);

	return (
		<div>
			<DetailUserNav />
			<ImageAndTextWrap $isMobile={$isMobile} $isTablet={$isTablet}>
				<ImageWrap $isMobile={$isMobile} $isTablet={$isTablet}>
					<CommunitySwiper images={data?.images} />
				</ImageWrap>
				<TextBox $isMobile={$isMobile} $isTablet={$isTablet}>
					<SubTitle>잃어버린 가족을 찾아주세요!</SubTitle>
					<div>
						<Description $isMobile={$isMobile} $isTablet={$isTablet}>
							잃어버린 지역
						</Description>
						<Text $isMobile={$isMobile} $isTablet={$isTablet}>
							{data?.place}
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
					{data?.comments?.map((list) => (
						<Comment key={list.commentsId} list={list} />
					))}
				</ul>
				<RegisterCommentForm />
			</CommentWrap>
		</div>
	);
};

export default LostDetail;
