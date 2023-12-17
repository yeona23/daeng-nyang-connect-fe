import { CiUser } from 'react-icons/ci';
import { CiMenuKebab } from 'react-icons/ci';
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
import { useResponsive } from '../../../../hooks/useResponsive';
import { Board } from '../../../../types/BoardTypes';

interface MateListProps {
	list: Board;
}

const MateList = ({ list }: MateListProps) => {
	const navigate = useNavigate();

	const moveToTheDetailPage = (id: number) => {
		navigate(`/community/mates/mate/${id}`);
	};

	const { $isTablet, $isMobile } = useResponsive();

	return (
		<MateLi $isMobile={$isMobile}>
			<SubNav>
				<UserWrap $isMobile={$isMobile} $isTablet={$isTablet}>
					<div>
						<CiUser />
					</div>
					<span>{list.nickname}</span>
				</UserWrap>
				<KebabWrap>
					<CiMenuKebab />
				</KebabWrap>
			</SubNav>
			<TextWrap
				onClick={() => moveToTheDetailPage(list.boardId)}
				$isMobile={$isMobile}
				$isTablet={$isTablet}>
				<PlaceWrap $isMobile={$isMobile} $isTablet={$isTablet}>
					지역 : {list.place}
				</PlaceWrap>
				<p>{list.text}</p>
			</TextWrap>
			<ButtonWrap>
				<Button $isMobile={$isMobile} $isTablet={$isTablet}>
					채팅하기
				</Button>
			</ButtonWrap>
		</MateLi>
	);
};

export default MateList;
