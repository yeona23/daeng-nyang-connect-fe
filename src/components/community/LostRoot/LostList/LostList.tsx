import { useNavigate } from 'react-router-dom';
import {
	Button,
	ButtonWrap,
	ImgWrap,
	LostLi,
	TextWrap,
} from './LostList.style';
import { useResponsive } from '../../../../hooks/useResponsive';
import { Board } from '../../../../types/BoardTypes';

interface LostPetProps {
	list: Board;
}

const LostList = ({ list }: LostPetProps) => {
	const navigate = useNavigate();

	const moveToTheDetailPage = (id: number) => {
		navigate(`/community/losts/lost/${id}`);
	};

	const { $isTablet, $isMobile } = useResponsive();

	return (
		<LostLi onClick={() => moveToTheDetailPage(list.boardId)}>
			<ImgWrap>
				{list.images && list.images.length > 0 && (
					<img src={list.images[0].url} alt="" />
				)}
			</ImgWrap>
			<TextWrap $isMobile={$isMobile} $isTablet={$isTablet}>
				<div>잃어버린 곳 : {list.place}</div>
				<div>
					잃어버린 일시 : {list.lostDate}
					{'  '}
					{/* {list.lost_time}시 {list.lost_minute}분{'  '}경 */}
				</div>
				<p>{list.text}</p>
			</TextWrap>
			<ButtonWrap>
				<Button $isMobile={$isMobile} $isTablet={$isTablet}>
					채팅하기
				</Button>
			</ButtonWrap>
		</LostLi>
	);
};

export default LostList;
