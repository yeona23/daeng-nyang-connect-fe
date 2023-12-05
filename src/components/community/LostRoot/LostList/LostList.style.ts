import styled from 'styled-components';

export const LostLi = styled.li`
	width: 100%;
	height: 480px;
	border: 1px solid var(--color-peach);
	border-radius: 8px;
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
	height: 50%;
	padding: 16px;

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
	padding: 4px 16px;
	border: 1px solid var(--color-light-salmon);
	border-radius: 4px;
	outline: none;
	background-color: transparent;
	cursor: pointer;
`;
