import styled from 'styled-components';

export const ModalForm = styled.form`
	height: 100%;
	padding: 12px;

	& input {
		border: 1px solid var(--color-light-salmon);
		outline: none;
		border-radius: 4px;
	}

	& textarea {
		width: 70%;
		height: 150px;
		padding: 4px 2px;
		border: 1px solid var(--color-light-salmon);
		border-radius: 4px;
		outline: none;
		font-size: 16px;
	}
`;

export const InfoWrap = styled.div`
	height: 85%;
`;

export const Title = styled.h1`
	padding-bottom: 12px;
	margin: 12px 0px;
	border-bottom: 0.5px solid var(--color-light-salmon);
	font-size: 20px;
	font-weight: bold;
`;

export const LabelWrap = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const LabelTitle = styled.label`
	width: 20%;
	font-weight: 400;
`;

export const InputWrap = styled.div`
	display: flex;
	align-items: center;

	& div {
		margin-left: 8px;
	}
`;

export const CheckInput = styled.input`
	border: 1px solid var(--color-light-salmon);
`;

export const ButtonWrap = styled.div`
	display: flex;
	justify-content: center;
	width: 65%;
	padding: 4px 0px;
	margin: auto;
	border-radius: 4px;
	background-color: var(--color-light-salmon);

	&:hover {
		background-color: var(--color-peach);
		cursor: pointer;

		& button {
			color: var(--color-deep-blue);
			cursor: pointer;
		}
	}

	& button {
		color: var(--color-peach);
		cursor: pointer;
	}
`;

export const TextInput = styled.input`
	width: 70%;
	padding: 4px;
	font-size: 16px;
`;
