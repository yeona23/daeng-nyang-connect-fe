import { CiMenuKebab } from 'react-icons/ci';

import {
	CreatedAtText,
	DetailUserWrap,
	InfoWrap,
	KebabWrap,
	LikeCount,
	LikeWrap,
	StyledFaHeart,
	SubInfoWrap,
	UserImageWrap,
} from './DetailUserNav.style';
import { useSelector } from 'react-redux';
import { CommunityState } from '../../../slice/communitySlice';
import { getBoard, likeBoard } from '../../../api/communityApi';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { BoardDetail } from '../../../types/BoardTypes';
import { useEffect, useState } from 'react';
import formatDate from '../../../utils/formatDate';

interface RootState {
	community: CommunityState;
}

const DetailUserNav = () => {
	const [likeCount, setLikeCount] = useState(0);

	const displayLabel = useSelector(
		(state: RootState) => state.community.displayLabel,
	);
	const { myPetId, mateId, tipId, lostId } = useParams();

	const fetchGetDetailBoard = async (): Promise<BoardDetail> => {
		const response = await getBoard(
			displayLabel === '나의 댕냥이'
				? 'my_pet'
				: displayLabel === '댕냥 꿀팁'
				  ? 'tips'
				  : displayLabel === '댕냥 메이트'
				    ? 'mate'
				    : displayLabel === '댕냥 미아센터'
				      ? 'lost'
				      : '',
			displayLabel === '나의 댕냥이'
				? myPetId
				: displayLabel === '댕냥 꿀팁'
				  ? tipId
				  : displayLabel === '댕냥 메이트'
				    ? mateId
				    : lostId,
		);

		return response;
	};

	const { data, refetch } = useQuery<BoardDetail>(
		displayLabel === '나의 댕냥이'
			? 'myPetDetailBoard'
			: displayLabel === '댕냥 꿀팁'
			  ? 'tipDetailBoard'
			  : displayLabel === '댕냥 메이트'
			    ? 'mateDetailBoard'
			    : 'lostDetailBoard',
		fetchGetDetailBoard,
	);

	const fetchLikeBoard = async () => {
		const response = await likeBoard(
			displayLabel === '나의 댕냥이'
				? 'my_pet'
				: displayLabel === '댕냥 꿀팁'
				  ? 'tips'
				  : displayLabel === '댕냥 메이트'
				    ? 'mate'
				    : 'lost',
			displayLabel === '나의 댕냥이'
				? 'myPetId'
				: displayLabel === '댕냥 꿀팁'
				  ? 'tipsId'
				  : displayLabel === '댕냥 메이트'
				    ? 'mateId'
				    : '',
			displayLabel === '나의 댕냥이'
				? myPetId
				: displayLabel === '댕냥 꿀팁'
				  ? tipId
				  : displayLabel === '댕냥 메이트'
				    ? mateId
				    : '',
		);

		return response;
	};

	const handleLikeClick = async () => {
		setLikeCount((prev) => prev + 1);

		try {
			await fetchLikeBoard();
			refetch();
		} catch (error) {
			console.error('Error updating like status:', error);
			setLikeCount((prev) => prev - 1);
		}
	};

	useEffect(() => {
		if (data) {
			setLikeCount(data.likes?.length || 0);
		}
	}, [data]);

	return (
		<DetailUserWrap>
			<InfoWrap>
				<UserImageWrap>
					<img src={data?.userThumbnail} alt="" />
				</UserImageWrap>
				<div>
					<div>{data?.nickname}</div>
					<CreatedAtText>{formatDate(data?.createdAt)}</CreatedAtText>
				</div>
			</InfoWrap>
			<SubInfoWrap>
				{displayLabel !== '댕냥 미아센터' && (
					<LikeWrap onClick={handleLikeClick}>
						<div>
							<StyledFaHeart />
						</div>
						<LikeCount>{data?.likes?.length}</LikeCount>{' '}
					</LikeWrap>
				)}
				<KebabWrap>
					<CiMenuKebab />
				</KebabWrap>
			</SubInfoWrap>
		</DetailUserWrap>
	);
};

export default DetailUserNav;
