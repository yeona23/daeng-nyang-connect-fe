import { useResponsive } from '../../../../hooks/useResponsive';
import { UserImgDiv } from '../../ChatContentsBox.style';
import {
	ChatRoomHeaderBdDiv,
	ChatRoomHeaderDiv,
	UserDiv,
} from './ChatRoomHeader.style';
import { LuMoreVertical } from 'react-icons/lu';
import { IoIosArrowBack } from 'react-icons/io';

const ChatRoomHeader = () => {
	const { $isMobile } = useResponsive();
	return (
		<ChatRoomHeaderDiv $isMobile={$isMobile}>
			<ChatRoomHeaderBdDiv>
				{$isMobile && <IoIosArrowBack className="back-icon" />}
				<UserDiv $isMobile={$isMobile}>
					{!$isMobile && (
						<UserImgDiv size="44px">
							<img src="/assets/community3.jpg" alt="" />
						</UserImgDiv>
					)}
					<p>닉네임</p>
				</UserDiv>
				<LuMoreVertical className="more-btn" />
			</ChatRoomHeaderBdDiv>
		</ChatRoomHeaderDiv>
	);
};

export default ChatRoomHeader;
