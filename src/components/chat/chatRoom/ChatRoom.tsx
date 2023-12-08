import AnimalInfo from './AnimalInffo/AnimalInfo';
import ChatInput from './ChatInput/ChatInput';
import { ChatRoomDiv } from './ChatRoom.style';
import ChatRoomHeader from './ChatRoomHeader/ChatRoomHeader';

const ChatRoom = () => {
	return (
		<ChatRoomDiv>
			<ChatRoomHeader />
			<AnimalInfo />
			<ChatInput />
		</ChatRoomDiv>
	);
};

export default ChatRoom;
