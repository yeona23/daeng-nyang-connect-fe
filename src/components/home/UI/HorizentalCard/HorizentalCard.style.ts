import styled from 'styled-components';

type HorizentalCardProps = {
	$isMobile?: boolean;
};

export const HorizentalCardLi = styled.li<HorizentalCardProps>`
	display: flex;
	width: ${(props) => (props.$isMobile ? '100%' : 'calc(50% - 18px)')};
	height: ${(props) => (props.$isMobile ? '200px' : '280px')};
	border-radius: 30px;
	box-shadow: 1px 0 8px 0 #9e848d50;
	margin-bottom: 12px;
	overflow: hidden;
	cursor: pointer;
`;
export const HorizentalCardImgDiv = styled.div`
	width: 50%;
	height: 100%;
	background: url('assets/community1.jpg') no-repeat center center / cover;
`;
export const HorizentalCardTextBox = styled.div`
	display: -webkit-box;
	height: 110px;
	line-height: 22px;
	text-align: left;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
`;
export const HorizentalCardTextDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 50%;
	padding: 20px;
`;
