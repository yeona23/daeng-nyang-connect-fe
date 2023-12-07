import styled from 'styled-components';

export const CommentWrap = styled.div`
	width: 100%;
	padding: 8px 16px;
`;

export const ImageAndTextWrap = styled.div`
	display: flex;
	padding: 12px 0px;
	margin-bottom: 12px;
	border-bottom: 1px solid var(--color-light-salmon);
`;

export const ImageWrap = styled.div`
	width: 50%;
	margin: 10px 10px 10px 12px;

	& img {
		width: 100%;
		height: auto;
		max-width: 100%;
	}
`;

export const SubTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
`;

export const TextBox = styled.div`
	width: 50%;
	padding: 20px;
	margin: 10px 10px 10px 12px;

	& h3 {
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: 400;
	}

	& p {
		margin-top: 8px;
	}
`;

export const Description = styled.div`
	display: inline-block;
	padding: 8px 12px;
	border-radius: 6px;
	background-color: var(--color-light-blue);
	font-weight: 300;
`;
