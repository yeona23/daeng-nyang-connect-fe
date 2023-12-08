import styled from '@emotion/styled';

type BannerProps = {
	$isMobile?: boolean;
	$isMaxWidth?: boolean;
};

export const BannerDiv = styled.div<BannerProps>`
	width: 100%;
	height: ${(props) => (props.$isMobile ? '500px' : '800px')};
	background: url('assets/cat-table-with-plants-around.jpg') no-repeat 50% 70% /
		cover;
`;
export const BannerContentsDiv = styled.div<BannerProps>`
	position: relative;
	max-width: 1320px;
	height: 100%;
	margin: ${(props) => (props.$isMaxWidth ? '0 30px' : null)};
`;
export const BannerSloganDiv = styled.div<BannerProps>`
	width: ${(props) => (props.$isMobile ? '50%' : null)};
	position: absolute;
	bottom: ${(props) => (props.$isMobile ? '20%' : '10%')};
	left: ${(props) => (props.$isMobile ? null : 0)};
	right: ${(props) => (props.$isMobile ? 0 : null)};
	img {
		width: 100%;
	}
`;
