import styled from 'styled-components';

export const LoadingWrap = styled.div`
	position: absolute;
	z-index: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #fff;
	img {
		width: 300px;
	}
`;
export const LoadingContents = styled.div`
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
`;
export const LoadingText = styled.p`
	position: relative;
	top: 65px;
	left: 80px;
	font-size: 36px;
	font-weight: 400;
	color: var(--color-light-salmon);
`;
