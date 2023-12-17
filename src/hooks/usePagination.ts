import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Board, RootState } from '../types/BoardTypes';
import { getAllBoard } from '../api/communityApi';
import { useQuery } from 'react-query';
import { SET_GET_ALL_BOARD } from '../slice/communitySlice';

const usePagination = (
	totalItems: number | undefined,
	itemsPerPage: number,
) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [pageRange, setPageRange] = useState([0, 1, 2, 3, 4]);
	const totalPages = totalItems && Math.ceil(totalItems / itemsPerPage);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (totalPages) {
	// 		const endPage = Math.min(5, totalPages);
	// 		setPageRange(Array.from({ length: endPage }, (_, i) => i + 1));
	// 	}
	// }, [totalItems, totalPages]);

	const displayLabel = useSelector(
		(state: RootState) => state.community.displayLabel,
	);

	const fetchGetAllBoard = async (): Promise<Board[]> => {
		const response = await getAllBoard(
			displayLabel === '나의 댕냥이'
				? 'myPets'
				: displayLabel === '댕냥 꿀팁'
				  ? 'tips'
				  : displayLabel === '댕냥 메이트'
				    ? 'mates'
				    : 'losts',
			displayLabel === '나의 댕냥이' || displayLabel === '댕냥 미아센터'
				? ''
				: String(currentPage),
		);

		return response;
	};

	const { data, refetch } = useQuery<Board[]>('tipAllBoard', fetchGetAllBoard);

	const handlePageClick = (pageNumber: number) => {
		dispatch(SET_GET_ALL_BOARD(data));
		refetch();
		setCurrentPage(pageNumber);
	};

	const handlePrevNextClick = (direction: 'prev' | 'next') => {
		if (direction === 'next') {
			setCurrentPage(currentPage + 1);
			if (totalPages) {
				if (pageRange[4] < totalPages) {
					const newRange = pageRange.map((page) => page + 5);
					setPageRange(newRange);
					setCurrentPage(newRange[0]);
				}
			}
		} else if (direction === 'prev') {
			setCurrentPage(currentPage - 1);
			if (pageRange[0] > 1) {
				const newRange = pageRange.map((page) => page - 5);
				setPageRange(newRange);
				setCurrentPage(newRange[0]);
			}
		}
	};

	return {
		currentPage,
		pageRange,
		totalPages,
		handlePageClick,
		handlePrevNextClick,
	};
};

export default usePagination;
