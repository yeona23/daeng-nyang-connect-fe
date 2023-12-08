import styled from 'styled-components';

export const ChatCategoryUl = styled.ul`
	display: flex;
	width: 100%;
	height: 76px;
	margin-bottom: 10px;
`;
export const ChatCategoryLi = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	border-radius: 8px;
	&.isActive {
		background-color: var(--color-teal);
	}
	.chat-icon {
		width: 40px;
		height: 40px;
	}
`;
