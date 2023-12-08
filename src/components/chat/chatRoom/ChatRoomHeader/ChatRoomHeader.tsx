import { UserImgDiv } from '../../ChatContentsBox.style';
import {
	ChatRoomHeaderBdDiv,
	ChatRoomHeaderDiv,
	UserDiv,
	UserNicknameP,
} from './ChatRoomHeader.style';
import { LuMoreVertical } from 'react-icons/lu';

const ChatRoomHeader = () => {
	return (
		<ChatRoomHeaderDiv>
			<ChatRoomHeaderBdDiv>
				<UserDiv>
					<UserImgDiv size="44px">
						<img src="/assets/community3.jpg" alt="" />
					</UserImgDiv>
					<UserNicknameP>닉네임</UserNicknameP>
				</UserDiv>
				<LuMoreVertical className="more-btn" />
			</ChatRoomHeaderBdDiv>
		</ChatRoomHeaderDiv>
	);
};

export default ChatRoomHeader;
