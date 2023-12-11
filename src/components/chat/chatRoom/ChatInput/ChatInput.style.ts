import styled from 'styled-components';

type ChatInputProps = {
	$isMobile: boolean;
};

export const ChatInputDiv = styled.div<ChatInputProps>`
	position: absolute;
	bottom: 14px;
	left: 0;
	display: flex;
	align-items: start;
	width: calc(100% - 24px);
	height: ${(props) => (props.$isMobile ? '' : '100px')};
	padding: 6px 8px;
	margin: 0 14px;
	border: 1px solid #f79698;
	border-radius: 8px;
	.plus-btn {
		width: 24px;
		height: 24px;
		margin-right: 4px;
		color: #f79698;
	}
`;
export const TextArea = styled.textarea`
	width: 100%;
	height: 100%;
	border-radius: 8px;
	border: none;
	font-family: 'Noto Sans KR', sans-serif;
	&::placeholder {
		color: var(--color-teal);
		opacity: 0.4;
		font-size: 14px;
		line-height: 20px;
	}
`;
export const SendBtn = styled.button<ChatInputProps>`
	width: 67px;
	padding: 6px 0;
	border-radius: 20px;
	background-color: #f79698;
	color: #fff;
	font-size: ${(props) => (props.$isMobile ? '12px' : '16px')};
`;
