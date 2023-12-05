import { BsBookmarkFill } from 'react-icons/bs';
import { ItemBox, ItemList } from './NewFamily.style';
import { useState } from 'react';

interface Item {
	id: number;
	index: number;
	itemTitle: string;
	age: string;
}

const generateImgUrl = (index: number): string => {
	const maxIndex = 4;
	const actualIndex = index <= maxIndex ? index : (index % maxIndex) + 1;
	return `/assets/animal${actualIndex}.jpg`;
};

const NewFamilyList: React.FC = () => {
	const items: Item[] = Array.from({ length: 8 }, (_, index) => ({
		id: index + 1,
		index: index + 1,
		itemTitle: '냥냥',
		age: '3년 2개월',
	}));

	const [bookmarkState, setBookmarkState] = useState<{
		[key: number]: boolean;
	}>({});

	const clickBookmarkHandler = (itemId: number) => {
		setBookmarkState((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
	};
	return (
		<ItemList>
			{items.map((item: Item) => (
				<ItemBox key={item.id}>
					<div>
						<img src={generateImgUrl(item.index)} alt={`adoption${item.id}`} />
						<BsBookmarkFill
							color={
								bookmarkState[item.id]
									? 'var(--color-light-salmon)'
									: '#ffffff70'
							}
							size={40}
							onClick={() => clickBookmarkHandler(item.id)}
						/>
					</div>
					<div>
						<p>이름 : {item.itemTitle}</p>
						<p>나이 : {item.age}</p>
						<button>자세히 보기</button>
					</div>
				</ItemBox>
			))}
		</ItemList>
	);
};

export default NewFamilyList;
