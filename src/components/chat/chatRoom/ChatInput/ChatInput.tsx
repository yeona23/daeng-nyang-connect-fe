import { useResponsive } from '../../../../hooks/useResponsive';
import { ChatInputDiv, SendBtn, TextArea } from './ChatInput.style';
import { FiPlusCircle } from 'react-icons/fi';

const ChatInput = () => {
	const { $isMobile } = useResponsive();
	return (
		<ChatInputDiv $isMobile={$isMobile}>
			<FiPlusCircle className="plus-btn" />
			<TextArea placeholder="메시지를 입력하세요." />
			<SendBtn $isMobile={$isMobile}>전송</SendBtn>
		</ChatInputDiv>
	);
};

export default ChatInput;
