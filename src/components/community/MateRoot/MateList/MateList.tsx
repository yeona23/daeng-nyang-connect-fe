import { CiUser } from 'react-icons/ci';
import { CiMenuKebab } from 'react-icons/ci';
import { MatePublish } from '../MateRoot';
import {
	Button,
	ButtonWrap,
	KebabWrap,
	MateLi,
	Paragraph,
	PlaceWrap,
	SubNav,
	UserWrap,
} from './MateList.style';

interface MateListProps {
	list: MatePublish;
}

const MateList = ({ list }: MateListProps) => {
	return (
		<MateLi>
			<SubNav>
				<UserWrap>
					<div>
						<CiUser />
					</div>
					<span>{list.userName}</span>
				</UserWrap>
				<KebabWrap>
					<CiMenuKebab />
				</KebabWrap>
			</SubNav>
			<PlaceWrap>지역 : {list.place}</PlaceWrap>
			<Paragraph>{list.description}</Paragraph>
			<ButtonWrap>
				<Button>채팅하기</Button>
			</ButtonWrap>
		</MateLi>
	);
};

export default MateList;
