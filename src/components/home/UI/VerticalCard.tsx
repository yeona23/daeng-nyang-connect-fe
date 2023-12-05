import {
	CardBtn,
	CardDiv,
	CardImgDiv,
	CardTextDiv,
} from './VerticalCard.style';

const VerticalCard = () => {
	return (
		<CardDiv>
			<CardImgDiv />
			<CardTextDiv>
				<div>
					<p>이름 : 나비</p>
					<p>나이 : 1년 5개월</p>
				</div>
				<CardBtn>자세히 보기</CardBtn>
			</CardTextDiv>
		</CardDiv>
	);
};

export default VerticalCard;
