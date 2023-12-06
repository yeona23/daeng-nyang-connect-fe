import { MainSectionH2 } from './../Section.style';
import {
	CardListUl,
	FindNewSection,
	FindNewTitleDiv,
} from './SectionFindNew.style';
import VerticalCard from './../UI/VerticalCard';
import { SalmonBtn } from '../UI/SalmonBtn/SalmonBtn.style';

const SectionFindNew = () => {
	return (
		<FindNewSection>
			<FindNewTitleDiv>
				<MainSectionH2>새로운 가족 찾기</MainSectionH2>
			</FindNewTitleDiv>
			<CardListUl>
				<VerticalCard></VerticalCard>
			</CardListUl>
			<SalmonBtn padding="30px" addStyle="addStyle">
				더보기
			</SalmonBtn>
		</FindNewSection>
	);
};

export default SectionFindNew;
