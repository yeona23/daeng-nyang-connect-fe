import styled from 'styled-components';

export const StyledSwiperWrapper = styled.div`
	.main-img-swiper .swiper-button-prev {
		opacity: 1;
		color: #ffffff;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	.main-img-swiper .swiper-button-prev:hover {
		color: #000000;
	}
	.main-img-swiper .swiper-button-next {
		opacity: 1;
		color: #ffffff;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	.main-img-swiper .swiper-button-next:hover {
		color: #000000;
	}

	.main-img-swiper .swiper-button-prev:after,
	.main-img-swiper .swiper-button-next:after {
		font-size: 2rem;
		font-weight: bold;
	}
`;

export const ImgWrap = styled.div`
	width: 100%;
	& img {
		width: 100%;
	}
`;
