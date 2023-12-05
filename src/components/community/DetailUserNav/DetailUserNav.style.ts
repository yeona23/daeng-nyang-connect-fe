import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const DetailUserWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 12px;
	border-bottom: 1px solid var(--color-light-salmon);
`;

export const InfoWrap = styled.div`
	display: flex;
`;

export const UserImageWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 1px solid black;
	width: 36px;
	height: 36px;
	margin-right: 16px;
	cursor: pointer;
`;

export const CreatedAtText = styled.div`
	font-size: 12px;
	color: gray;
	margin-top: 8px;
`;

export const KebabWrap = styled.div`
	cursor: pointer;
	margin-left: 20px;
`;

export const SubInfoWrap = styled.div`
	display: flex;
	align-items: center;

	& div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const LikeWrap = styled.div`
	background-color: var(--color-light-salmon);
	border-radius: 10px;
	padding: 0px 10px;
	cursor: pointer;
`;

export const LikeCount = styled.div`
	min-width: 45px;
	min-height: 45px;
	padding: 8px 8px;
	border-radius: 50%;
	margin-left: 8px;
	color: white;
`;

export const StyledFaHeart = styled(FaHeart)`
	color: white;
	margin-left: 8px;
`;
