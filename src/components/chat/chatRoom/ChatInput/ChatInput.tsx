import { ChatInputDiv, SendBtn, TextArea } from './ChatInput.style';
import { FiPlusCircle } from 'react-icons/fi';

const ChatInput = () => {
	return (
		<ChatInputDiv>
			<FiPlusCircle className="plus-btn" />
			<TextArea placeholder="메시지를 입력하세요." />
			<SendBtn>전송</SendBtn>
		</ChatInputDiv>
	);
};

export default ChatInput;
