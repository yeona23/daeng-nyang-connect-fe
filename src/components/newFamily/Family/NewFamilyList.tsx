/* eslint-disable react/prop-types */
import { BsBookmarkFill } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemBox, ItemList } from '../NewFamily.style';

interface Item {
	id: number;
	index: number;
	name: string;
	age: string;
}

interface ResponsiveProps {
	$isMobile: boolean;
	$isTablet: boolean;
	$isPc: boolean;
	$isMaxWidth: boolean;
}

const generateImgUrl = (index: number): string => {
	const maxIndex = 4;
	const actualIndex = index <= maxIndex ? index : (index % maxIndex) + 1;
	return `/assets/animal${actualIndex}.jpg`;
};

const NewFamilyList: React.FC<ResponsiveProps> = ({
	$isMobile,
	$isTablet,
	$isPc,
	$isMaxWidth,
}) => {
	const navigate = useNavigate();

	const items: Item[] = Array.from({ length: 8 }, (_, index) => ({
		id: index + 1,
		index: index + 1,
		name: '냥냥',
		age: '3년 2개월',
	}));

	const [bookmarkState, setBookmarkState] = useState<{
		[key: number]: boolean;
	}>({});

	const clickBookmarkHandler = (itemId: number) => {
		setBookmarkState((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
	};

	const goToDetailPage = (petId: number, imageUrl: string) => {
		navigate(`/newFamily/pet/${petId}`, { state: { imageUrl } });
	};

	const getBookmarkSize = () => {
		if ($isMobile) return 25;
		if ($isTablet) return 30;
		if ($isPc) return 30;
	};

	return (
		<ItemList>
			{items.map((item: Item) => (
				<ItemBox
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}
					key={item.id}
					onClick={() => goToDetailPage(item.id, generateImgUrl(item.index))}>
					<div>
						<img src={generateImgUrl(item.index)} alt={`adoption${item.id}`} />
						<BsBookmarkFill
							color={
								bookmarkState[item.id]
									? 'var(--color-light-salmon)'
									: '#ffffff70'
							}
							size={getBookmarkSize()}
							onClick={() => clickBookmarkHandler(item.id)}
						/>
					</div>
					<div>
						<p>이름 : {item.name}</p>
						<p>나이 : {item.age}</p>
						<button
							onClick={() =>
								goToDetailPage(item.id, generateImgUrl(item.index))
							}>
							자세히 보기
						</button>
					</div>
				</ItemBox>
			))}
		</ItemList>
	);
};

export default NewFamilyList;
