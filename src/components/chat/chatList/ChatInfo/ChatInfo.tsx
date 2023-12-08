import { UserImgDiv } from '../../ChatContentsBox.style';
import {
	ChatInfoDiv,
	ChatInfoEachDiv,
	ChatListLi,
	NoneReadCountEm,
} from './ChatInfo.style';

type BgProps = {
	className?: string;
};

const ChatInfo = ({ className }: BgProps) => {
	return (
		<ChatListLi className={className}>
			<UserImgDiv size="36px">
				<img src="/assets/community1.jpg" alt="" />
			</UserImgDiv>
			<ChatInfoDiv>
				<ChatInfoEachDiv className="first-box">
					<p>유저닉네임</p>
					<time style={{ fontSize: '14px' }}>30분 전</time>
				</ChatInfoEachDiv>
				<ChatInfoEachDiv>
					<p>메시지 미리보기</p>
					<NoneReadCountEm>4</NoneReadCountEm>
				</ChatInfoEachDiv>
			</ChatInfoDiv>
		</ChatListLi>
	);
};

export default ChatInfo;
