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
	width: 36px;
	height: 36px;
	margin-right: 16px;
	border: 1px solid black;
	border-radius: 50%;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
`;

export const CreatedAtText = styled.div`
	margin-top: 8px;
	color: gray;
	font-size: 12px;
`;

export const KebabWrap = styled.div`
	margin-left: 20px;
	cursor: pointer;
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
	padding: 0px 10px;
	border-radius: 10px;
	background-color: var(--color-light-salmon);
	cursor: pointer;
`;

export const LikeCount = styled.div`
	min-width: 45px;
	min-height: 45px;
	padding: 4px 8px;
	margin-left: 8px;
	border-radius: 50%;
	color: white;
`;

export const StyledFaHeart = styled(FaHeart)`
	margin-left: 8px;
	color: white;
`;
