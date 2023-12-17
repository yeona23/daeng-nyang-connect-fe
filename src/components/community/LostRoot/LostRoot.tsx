import { useQuery } from 'react-query';
import { getAllBoard } from '../../../api/communityApi';
import { useResponsive } from '../../../hooks/useResponsive';
import { Board, RootState } from '../../../types/BoardTypes';
import LostList from './LostList/LostList';
import { LostLists } from './LostRoot.style';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const LostRoot = () => {
	const { $isTablet, $isMobile } = useResponsive();

	const category = useSelector(
		(state: RootState) => state.community.subCategory,
	);

	const [filteredData, setFilteredData] = useState<Board[]>([]);

	const fetchGetAllLostBoard = async (): Promise<Board[]> => {
		const response = await getAllBoard('lost');

		return response;
	};

	const { data } = useQuery<Board[]>('lostAllBoard', fetchGetAllLostBoard);

	useEffect(() => {
		if (Array.isArray(data)) {
			const filteredData = (data as Board[])?.filter((item) => {
				if (category === null) {
					return item;
				} else {
					return item.category === category;
				}
			});
			setFilteredData(filteredData);
		}
	}, [data, category]);

	return (
		<LostLists $isMobile={$isMobile} $isTablet={$isTablet}>
			{category === ''
				? data?.map(
						(list) =>
							'boardId' in list && <LostList key={list.boardId} list={list} />,
				  )
				: filteredData?.map(
						(list) =>
							'boardId' in list && <LostList key={list.boardId} list={list} />,
				  )}
		</LostLists>
	);
};

export default LostRoot;
