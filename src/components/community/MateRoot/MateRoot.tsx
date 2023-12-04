import MateList from './MateList/MateList';
import { MateLists } from './MateRoot.style';
import Pagination from '../../Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';

export interface MatePublish {
	id: number;
	userThumbnail: string;
	userName: string;
	place: string;
	description: string;
}

const createRandomMatePublish = (): MatePublish[] => {
	const matePublishList: MatePublish[] = [];
	for (let i = 0; i < 200; i++) {
		matePublishList.push({
			id: i,
			userThumbnail: `thumbnail-${i}.jpg`,
			userName: `User${i}`,
			place: `Place${i}`,
			description: `Description for mate publish ${i}`,
		});
	}
	return matePublishList;
};

const MateRoot = () => {
	const matePublishList = createRandomMatePublish();
	const itemsPerPage = 12;
	const { currentPage, pageRange, handlePageClick, handlePrevNextClick } =
		usePagination(matePublishList.length, itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentMatePublishLists = matePublishList.slice(startIndex, endIndex);

	return (
		<>
			<MateLists>
				{currentMatePublishLists.map((list) => (
					<MateList key={list.id} list={list} />
				))}
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
