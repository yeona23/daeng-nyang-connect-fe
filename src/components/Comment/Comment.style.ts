import styled from 'styled-components';

interface NavOptionProps {
	$isTablet?: boolean;
	$isMobile?: boolean;
}

export const CommentLi = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 16px 8px;
	border-bottom: 1px solid #ebeced;
`;

export const InfoWrap = styled.div`
	display: flex;
`;

export const UserImageWrap = styled.div<NavOptionProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) =>
		props.$isTablet ? '28px' : props.$isMobile ? '24px' : '30px'};
	height: ${(props) =>
		props.$isTablet ? '28px' : props.$isMobile ? '24px' : '30px'};
	margin-right: 16px;
	border-radius: 50%;
	border: 1px solid black;
	cursor: pointer;
`;

export const TextWrap = styled.div<NavOptionProps>`
	& div {
		margin-bottom: 8px;
	}

	& div:nth-child(1) {
		font-weight: bold;
		font-size: ${(props) =>
			props.$isTablet ? '16px' : props.$isMobile ? '15px' : '16px'};
	}

	& div:nth-child(2) {
		margin-bottom: 12px;
		font-size: ${(props) =>
			props.$isTablet ? '15px' : props.$isMobile ? '14px' : '16px'};
	}

	& div:nth-child(3) {
		color: gray;
		font-size: ${(props) =>
			props.$isTablet ? '11px' : props.$isMobile ? '10px' : '12px'};
	}
`;

export const KebabWrap = styled.div`
	cursor: pointer;
`;
