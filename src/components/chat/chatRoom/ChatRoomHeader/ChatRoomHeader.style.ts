import styled from 'styled-components';
import { FlexStyle } from '../../ChatContentsBox.style';

export const ChatRoomHeaderDiv = styled.div`
	padding: 0 14px;
	.more-btn {
		width: 30px;
		height: 30px;
		color: #f79698;
	}
`;
export const ChatRoomHeaderBdDiv = styled.div`
	${FlexStyle}
	justify-content: space-between;
	padding: 18px 10px 10px;
`;
export const UserDiv = styled.div`
	${FlexStyle}
`;
export const UserNicknameP = styled.p`
	font-size: 20px;
`;
