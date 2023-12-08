import { MainSectionH2 } from './../Section.style';
import {
	CardListUl,
	FindNewSection,
	FindNewTitleDiv,
} from './SectionFindNew.style';
import { SalmonBtn } from '../UI/SalmonBtn/SalmonBtn.style';
import FindNewList from './FindNewList/FindNewList';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '../../../hooks/useResponsive';

const SectionFindNew = () => {
	const navigate = useNavigate();
	const { $isMaxWidth, $isMobile } = useResponsive();

	const moveToNew = () => {
		navigate('/newFamily');
	};

	const FindNewMorePadding = $isMobile ? '8px 20px' : '10px 30px';
	return (
		<FindNewSection $isMobile={$isMobile}>
			<FindNewTitleDiv $isMaxWidth={$isMaxWidth}>
				<MainSectionH2 $isMobile={$isMobile}>새로운 가족 찾기</MainSectionH2>
				<SalmonBtn
					padding={FindNewMorePadding}
					onClick={moveToNew}
					$isMobile={$isMobile}>
					더보기
				</SalmonBtn>
			</FindNewTitleDiv>
			<CardListUl>
				<FindNewList />
			</CardListUl>
		</FindNewSection>
	);
};

export default SectionFindNew;
