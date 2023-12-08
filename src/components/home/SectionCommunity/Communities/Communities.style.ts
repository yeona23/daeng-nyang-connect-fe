import { css, styled } from 'styled-components';

type Props = {
	img?: string;
	$isTablet?: boolean;
	$isMobile?: boolean;
};

export const CommunityLi = styled.li<Props>`
	position: relative;
	width: ${(props) => (props.$isMobile ? '50%' : '25%')};
	height: ${(props) => (props.$isMobile ? '250px' : '300px')};
	cursor: pointer;
`;

export const CommunityImgDiv = styled.div<Props>`
	width: ${(props) =>
		props.$isTablet ? '180px' : props.$isMobile ? '100%' : '240px'};
	height: ${(props) =>
		props.$isTablet ? '180px' : props.$isMobile ? '100%' : '240px'};
	margin: 0 auto 24px;
	border-radius: ${(props) => (props.$isMobile ? null : '50%')};
	background: url('${(props) => props.img}') no-repeat
		${(props) => (props.img && props.img.includes('2') ? '30%' : null)} center /
		auto 100%;
	transition: all 0.2s ease-in;
	overflow: hidden;
	&:hover {
		background-size: auto 110%;
		opacity: ${(props) => (props.$isMobile ? '0.6' : '1')};
	}
`;
export const CommunityTitleDt = styled.dt<Props>`
	margin-bottom: 8px;
	font-size: ${(props) => (props.$isMobile ? '16px' : '20px')};
	font-weight: 400;
	color: ${(props) => props.$isMobile && '#fff'};
`;

const MobileDl = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%);
`;
export const CommunityTextDl = styled.dl<Props>`
	${(props) => (props.$isMobile ? MobileDl : null)}
`;
