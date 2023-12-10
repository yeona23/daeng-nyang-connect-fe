import styled from 'styled-components';

type AnimalInfoProps = {
	$isMobile: boolean;
};

export const AnimalInfoDiv = styled.div<AnimalInfoProps>`
	display: flex;
	align-items: center;
	width: calc(100% - 28px);
	height: ${(props) => (props.$isMobile ? '80px' : '100px')};
	margin: 0 14px;
	padding: 10px;
	border: 1px solid #f7969890;
	border-radius: 8px;
	line-height: 1.6;
	font-size: ${(props) => (props.$isMobile ? '12px' : null)};
`;
export const AnimalInfoImgDiv = styled.div<AnimalInfoProps>`
	width: ${(props) => (props.$isMobile ? '30%' : '100px')};
	height: 100%;
	border-radius: 4px;
	margin-right: 10px;
	overflow: hidden;
	img {
		height: 100%;
	}
`;
export const AnimalInfoTextDiv = styled.div`
	flex: 1 0 auto;
`;
export const BtnDiv = styled.div`
	align-self: end;
`;
export const CompleteBtn = styled.button<AnimalInfoProps>`
	padding: ${(props) => (props.$isMobile ? '3px 12px' : '6px 20px')};
	border: 1px solid var(--color-peach);
	border-radius: 8px;
	font-size: ${(props) => (props.$isMobile ? '10px' : null)};
	cursor: pointer;
`;
