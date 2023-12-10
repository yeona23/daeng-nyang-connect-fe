import { useResponsive } from '../../../../hooks/useResponsive';
import {
	AnimalInfoDiv,
	AnimalInfoImgDiv,
	AnimalInfoTextDiv,
	BtnDiv,
	CompleteBtn,
} from './AnimalInfo.style';

const AnimalInfo = () => {
	const { $isMobile } = useResponsive();

	return (
		<AnimalInfoDiv $isMobile={$isMobile}>
			<AnimalInfoImgDiv $isMobile={$isMobile}>
				<img src="/assets/community2.jpg" alt="" />
			</AnimalInfoImgDiv>
			<AnimalInfoTextDiv>
				<p>이름: 냥냥</p>
				<p>나이: 1년 3개월</p>
				<p>품종: 강아지 말티즈</p>
			</AnimalInfoTextDiv>
			<BtnDiv>
				<CompleteBtn $isMobile={$isMobile}>입양 신청</CompleteBtn>
			</BtnDiv>
		</AnimalInfoDiv>
	);
};

export default AnimalInfo;
