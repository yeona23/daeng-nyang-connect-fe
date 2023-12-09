import styled from 'styled-components';

type ChatCategoryProps = {
	$isMobile?: boolean;
};

export const ChatCategoryUl = styled.ul<ChatCategoryProps>`
	display: flex;
	width: 100%;
	height: ${(props) => (props.$isMobile ? '46px ' : '76px')};
	margin-bottom: 10px;
`;
export const ChatCategoryLi = styled.li<ChatCategoryProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	border-radius: 8px;
	&.isActive {
		background-color: var(--color-teal);
	}
	.chat-icon {
		width: ${(props) => (props.$isMobile ? '24px' : '40px')};
		height: ${(props) => (props.$isMobile ? '24px' : '40px')};
	}
`;
