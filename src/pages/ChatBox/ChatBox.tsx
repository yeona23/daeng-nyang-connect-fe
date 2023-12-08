import ChatContentsBox from '../../components/chat/ChatContentsBox';
import { ChatBoxInnerdiv, ChatBoxWrapperDiv } from './ChatBox.style';

const ChatBox = () => {
	return (
		<ChatBoxWrapperDiv>
			<ChatBoxInnerdiv>
				<ChatContentsBox />
			</ChatBoxInnerdiv>
		</ChatBoxWrapperDiv>
	);
};

export default ChatBox;
