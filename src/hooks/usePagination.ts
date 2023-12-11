import { useState, useEffect } from 'react';

const usePagination = (totalItems: number, itemsPerPage: number) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageRange, setPageRange] = useState([1, 2, 3, 4, 5]);
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	useEffect(() => {
		const endPage = Math.min(5, totalPages);
		setPageRange(Array.from({ length: endPage }, (_, i) => i + 1));
	}, [totalItems, totalPages]);

	const handlePageClick = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const handlePrevNextClick = (direction: 'prev' | 'next') => {
		if (direction === 'next') {
			setCurrentPage(currentPage + 1);
			if (pageRange[4] < totalPages) {
				const newRange = pageRange.map((page) => page + 5);
				setPageRange(newRange);
				setCurrentPage(newRange[0]);
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
