import MateList from './MateList/MateList';
import { MateLists } from './MateRoot.style';
import Pagination from '../../Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import { useResponsive } from '../../../hooks/useResponsive';
import { getAllBoard } from '../../../api/communityApi';
import { Board } from '../../../types/BoardTypes';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CommunityState } from '../../../slice/communitySlice';

interface RootState {
	community: CommunityState;
}

const MateRoot = () => {
	const [filteredData, setFilteredData] = useState<Board[]>([]);

	const category = useSelector(
		(state: RootState) => state.community.subCategory,
	);

	const { $isTablet, $isMobile } = useResponsive();

	const fetchGetAllMateBoard = async (): Promise<Board[]> => {
		const response = await getAllBoard('mate', String(currentPage));

		return response;
	};

	const { data } = useQuery<Board[]>('mateAllBoard', fetchGetAllMateBoard);

	const itemsPerPage = 12;
	const { currentPage, pageRange, handlePageClick, handlePrevNextClick } =
		usePagination(data && data.length, itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentMatePublishLists = data && data.slice(startIndex, endIndex);

	useEffect(() => {
		if (data) {
			const filteredData = (data as Board[]).filter((item) => {
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
		<>
			<MateLists $isMobile={$isMobile} $isTablet={$isTablet}>
				{category === ''
					? data?.map((list) => {
							if ('boardId' in list) {
								return <MateList key={list.boardId} list={list} />;
							}
					  })
					: filteredData &&
					  filteredData.map((list) => {
							if ('boardId' in list) {
								return <MateList key={list.boardId} list={list} />;
							}
					  })}
			</MateLists>
			<Pagination
				currentPage={currentPage}
				pageRange={pageRange}
				onPrevClick={() => handlePrevNextClick('prev')}
				onNextClick={() => handlePrevNextClick('next')}
				onPageClick={handlePageClick}
			/>
		</>
	);
};

export default MateRoot;
