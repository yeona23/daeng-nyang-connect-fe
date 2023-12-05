import { useNavigate } from 'react-router-dom';
import { MyTip } from '../TipRoot';
import { TipLi } from './TipList.style';

interface MyTipListProps {
	list: MyTip;
}

const TipList = ({ list }: MyTipListProps) => {
	const navigate = useNavigate();

	const moveToTheDetailPage = (id: number) => {
		navigate(`/community/tips/tip/${id}`);
	};

	return (
		<TipLi onClick={() => moveToTheDetailPage(list.id)}>
			<div>{list.title}</div>
			<div>{list.nickname}</div>
			<div>{list.createdAt}</div>
			<div>{list.like}</div>
		</TipLi>
	);
};

export default TipList;
