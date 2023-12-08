import styled from 'styled-components';

export const AnimalInfoDiv = styled.div`
	display: flex;
	align-items: center;
	width: calc(100% - 28px);
	height: 100px;
	margin: 10px 14px;
	padding: 10px;
	border: 2px solid #f7969890;
	border-radius: 8px;
	line-height: 1.6;
`;
export const AnimalInfoImgDiv = styled.div`
	width: 100px;
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
export const CompleteBtn = styled.button`
	padding: 6px 20px;
	border-radius: 8px;
	background-color: var(--color-peach);
	cursor: pointer;
`;
