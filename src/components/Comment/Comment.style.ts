import styled from 'styled-components';

export const CommentLi = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 16px 8px;
	border-bottom: 1px solid #ebeced;
`;

export const InfoWrap = styled.div`
	display: flex;
`;

export const UserImageWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	margin-right: 16px;
	border-radius: 50%;
	border: 1px solid black;
	cursor: pointer;
`;

export const TextWrap = styled.div`
	& div {
		margin-bottom: 8px;
	}

	& div:nth-child(1) {
		font-weight: bold;
	}

	& div:nth-child(2) {
		margin-bottom: 12px;
	}

	& div:nth-child(3) {
		color: gray;
		font-size: 12px;
	}
`;

export const KebabWrap = styled.div`
	cursor: pointer;
`;
