import { IoChatbubbleOutline } from 'react-icons/io5';
import { ChatCategoryLi, ChatCategoryUl } from './ChatCategory.style';
const ChatCategory = () => {
	return (
		<ChatCategoryUl>
			<ChatCategoryLi className="isActive">
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
