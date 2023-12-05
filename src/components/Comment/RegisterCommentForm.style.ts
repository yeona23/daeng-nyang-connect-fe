import styled from 'styled-components';

export const Form = styled.form`
	width: 100%;
	height: 150px;
	padding: 10px;
	margin-top: 60px;
	border: 1px solid var(--color-light-salmon);
	border-radius: 10px;
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 60%;
	margin-top: 8px;
	border: none;
	outline: none;
`;

export const ButtonWrap = styled.div`
	text-align: right;

	& button {
		margin-right: 8px;
		border: none;
		outline: none;
		background-color: transparent;
		cursor: pointer;
		font-size: 16px;
	}
`;
