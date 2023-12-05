import styled from 'styled-components';

export const Form = styled.form`
	width: 100%;
	height: 150px;
	border: 1px solid var(--color-light-salmon);
	border-radius: 10px;
	padding: 10px;
	margin-top: 60px;
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 60%;
	border: none;
	outline: none;
	margin-top: 8px;
`;

export const ButtonWrap = styled.div`
	text-align: right;

	& button {
		border: none;
		outline: none;
		background-color: transparent;
		cursor: pointer;
		margin-right: 8px;
		font-size: 16px;
	}
`;
