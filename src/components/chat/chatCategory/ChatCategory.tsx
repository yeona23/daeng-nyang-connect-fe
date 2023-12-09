import { IoChatbubbleOutline } from 'react-icons/io5';
import { ChatCategoryLi, ChatCategoryUl } from './ChatCategory.style';
import { useResponsive } from '../../../hooks/useResponsive';
const ChatCategory = () => {
	const { $isMobile } = useResponsive();
	return (
		<ChatCategoryUl $isMobile={$isMobile}>
			<ChatCategoryLi className="isActive" $isMobile={$isMobile}>
				<div>
					<img
						className="chat-icon"
						src="/assets/foundation_paw.svg"
						alt="발바닥"
					/>
				</div>
			</ChatCategoryLi>
			<ChatCategoryLi>
				<IoChatbubbleOutline className="chat-icon" />
			</ChatCategoryLi>
		</ChatCategoryUl>
	);
};

export default ChatCategory;
