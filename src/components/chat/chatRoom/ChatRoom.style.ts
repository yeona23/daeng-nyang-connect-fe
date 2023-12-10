import styled from 'styled-components';

type ChatRoomProps = {
	$isMobile: boolean;
};

export const ChatRoomDiv = styled.div<ChatRoomProps>`
	position: relative;
	width: 100%;
	height: ${(props) => (props.$isMobile ? '100vh' : '900px')};
	border-radius: 20px;
	margin-top: ${(props) => (props.$isMobile ? '45px' : null)};
	box-shadow: 0px 4px 10px 0 #f7969880;
`;
