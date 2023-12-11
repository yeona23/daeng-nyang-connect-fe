import { useNavigate } from 'react-router-dom';
import { MyTip } from '../TipRoot';
import { TipLi } from './TipList.style';
import { useResponsive } from '../../../../hooks/useResponsive';

interface MyTipListProps {
	list: MyTip;
}

const TipList = ({ list }: MyTipListProps) => {
	const navigate = useNavigate();

	const moveToTheDetailPage = (id: number) => {
		navigate(`/community/tips/tip/${id}`);
	};

	const { $isMobile, $isTablet } = useResponsive();

	return (
		<TipLi
			onClick={() => moveToTheDetailPage(list.id)}
			$isMobile={$isMobile}
			$isTablet={$isTablet}>
			<div>{list.title}</div>
			<div>{list.nickname}</div>
			<div>{list.createdAt}</div>
			<div>{list.like}</div>
		</TipLi>
	);
};

export default TipList;
