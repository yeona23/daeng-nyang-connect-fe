import styled, { css } from 'styled-components';

const FlexStyle = css`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const ChatListLi = styled.li`
	padding: 15px;
	margin-bottom: 2px;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0 1px 3px 0 var(--color-peach);
	${FlexStyle}
	&.active {
		background-color: var(--color-peach);
	}
`;

export const ChatInfoDiv = styled.div`
	flex: 1 0 auto;
	line-height: 1.4;
`;
export const ChatInfoEachDiv = styled.div`
	${FlexStyle}
	justify-content: space-between;
	&.first-box {
		margin-bottom: 3px;
	}
`;
export const NoneReadCountEm = styled.em`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: #eb6c6c;
	color: #fff;
	text-align: center;
`;
