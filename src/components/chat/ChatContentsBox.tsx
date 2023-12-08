import { ChatInnerLeftDiv, ChatInnerRightDiv } from './ChatContentsBox.style';
import ChatCategory from './chatCategory/ChatCategory';
import ChatList from './chatList/ChatList';
import ChatRoom from './chatRoom/ChatRoom';

const ChatContentsBox = () => {
	return (
		<>
			<ChatInnerLeftDiv>
				<ChatCategory />
				<ChatList />
			</ChatInnerLeftDiv>
			<ChatInnerRightDiv>
				<ChatRoom />
			</ChatInnerRightDiv>
		</>
	);
};

export default ChatContentsBox;
