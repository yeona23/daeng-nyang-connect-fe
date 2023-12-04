import styled from 'styled-components';

export const LostLi = styled.li`
	width: 100%;
	border: 1px solid var(--color-peach);
	border-radius: 8px;
	height: 480px;
	cursor: pointer;
`;

export const ImgWrap = styled.div`
	& img {
		width: 100%;
		height: 250px;
		border-radius: 8px 8px 0px 0px;
	}
`;

export const TextWrap = styled.div`
	padding: 16px;
	height: 50%;

	& div {
		margin-bottom: 16px;
	}

	& p {
		height: 50%;
		margin-top: 16px;
	}
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
