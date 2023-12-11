import styled from 'styled-components';

interface NavOptionProps {
	$isTablet?: boolean;
	$isMobile?: boolean;
}

export const MyPetLi = styled.li<NavOptionProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& img {
		width: ${(props) => (props.$isMobile ? '80%' : '100%')};
		cursor: pointer;
	}
`;

export const ImageWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const UserWrap = styled.div<NavOptionProps>`
	display: flex;
	justify-content: start;
	align-items: center;
	width: ${(props) => (props.$isMobile ? '80%' : '100%')};
	margin-top: 10px;

	& div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: ${(props) =>
			props.$isTablet ? '28px' : props.$isMobile ? '32px' : '30px'};
		height: ${(props) =>
			props.$isTablet ? '28px' : props.$isMobile ? '32px' : '30px'};
		margin-right: 8px;
		border: 1px solid black;
		border-radius: 50%;
		cursor: pointer;
	}

	& span {
		font-size: ${(props) =>
			props.$isTablet ? '14px' : props.$isMobile ? '18px' : '16px'};
	}
`;
