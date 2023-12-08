import styled, { css } from 'styled-components';

type ImgProps = {
	size?: string;
};
export const FlexStyle = css`
	display: flex;
	align-items: center;
	width: 100%;
`;
export const ChatInnerLeftDiv = styled.div`
	width: calc(30% - 20px);
	margin-right: 20px;
`;
export const ChatInnerRightDiv = styled.div`
	width: 70%;
`;
export const UserImgDiv = styled.div<ImgProps>`
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	border-radius: 50%;
	margin-right: 8px;
	overflow: hidden;
	img {
		height: 100%;
	}
`;
