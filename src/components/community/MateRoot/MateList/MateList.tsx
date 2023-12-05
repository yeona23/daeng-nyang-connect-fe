import { CiUser } from 'react-icons/ci';
import { CiMenuKebab } from 'react-icons/ci';
import { MatePublish } from '../MateRoot';
import {
	Button,
	ButtonWrap,
	KebabWrap,
	MateLi,
	PlaceWrap,
	SubNav,
	TextWrap,
	UserWrap,
} from './MateList.style';
import { useNavigate } from 'react-router-dom';

interface MateListProps {
	list: MatePublish;
}

const MateList = ({ list }: MateListProps) => {
	const navigate = useNavigate();

	const moveToTheDetailPage = (id: number) => {
		navigate(`/community/mates/mate/${id}`);
	};

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
			<TextWrap onClick={() => moveToTheDetailPage(list.id)}>
				<PlaceWrap>지역 : {list.place}</PlaceWrap>
				<p>{list.text}</p>
			</TextWrap>
			<ButtonWrap>
				<Button>채팅하기</Button>
			</ButtonWrap>
		</MateLi>
	);
};

export default MateList;
