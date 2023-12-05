import { BannerContentsDiv, BannerDiv, BannerSloganDiv } from './Banner.style';

const Banner = () => {
	return (
		<BannerDiv>
			<BannerContentsDiv>
				<BannerSloganDiv>
					<img src="assets/slogan.svg" alt="만난다, 귀엽다, 예쁘다" />
				</BannerSloganDiv>
			</BannerContentsDiv>
		</BannerDiv>
	);
};

export default Banner;
