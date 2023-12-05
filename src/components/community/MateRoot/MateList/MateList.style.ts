import styled from 'styled-components';

export const MateLi = styled.li`
	display: flex;
	flex-direction: column;
	border: 1px solid var(--color-peach);
	border-radius: 8px;
	padding: 16px;
	height: 250px;
	margin-bottom: 10px;
`;

export const SubNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;

export const UserWrap = styled.div`
	display: flex;
	align-items: center;

	& div {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid black;
		width: 30px;
		height: 30px;
		margin-right: 8px;
		cursor: pointer;
	}

	& span {
		margin-left: 8px;
	}
`;

export const KebabWrap = styled.div`
	cursor: pointer;
`;

export const PlaceWrap = styled.div`
	margin-bottom: 16px;
`;

export const ButtonWrap = styled.div`
	text-align: right;

	& button:hover {
		background-color: var(--color-light-salmon);
		color: var(--color-peach);
	}
`;

export const Button = styled.button`
	border-radius: 4px;
	border: 1px solid var(--color-light-salmon);
	outline: none;
	background-color: transparent;
	padding: 4px 16px;
	cursor: pointer;
`;

export const TextWrap = styled.div`
	height: 60%;
	cursor: pointer;
`;
