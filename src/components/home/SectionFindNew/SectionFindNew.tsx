import { MainSectionH2 } from './../Section.style';
import {
	CardListUl,
	FindNewSection,
	FindNewTitleDiv,
} from './SectionFindNew.style';
import { SalmonBtn } from '../UI/SalmonBtn/SalmonBtn.style';
import FindNewList from './FindNewList/FindNewList';

const SectionFindNew = () => {
	return (
		<FindNewSection>
			<FindNewTitleDiv>
				<MainSectionH2>새로운 가족 찾기</MainSectionH2>
			</FindNewTitleDiv>
			<CardListUl>
				<FindNewList />
			</CardListUl>
			<SalmonBtn padding="10px 30px" addStyle="addStyle">
				더보기
			</SalmonBtn>
		</FindNewSection>
	);
};

export default SectionFindNew;
