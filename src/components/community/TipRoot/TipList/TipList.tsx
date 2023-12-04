import { MyTip } from '../TipRoot';
import { TipLi } from './TipList.style';

interface MyTipListProps {
	list: MyTip;
}

const TipList = ({ list }: MyTipListProps) => {
	return (
		<TipLi>
			<div>{list.title}</div>
			<div>{list.nickname}</div>
			<div>{list.createdAt}</div>
			<div>{list.like}</div>
		</TipLi>
	);
};

export default TipList;
