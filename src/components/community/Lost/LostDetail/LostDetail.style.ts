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
	margin: 10px 10px 10px 12px;
	width: 50%;

	& img {
		height: 500px;
	}
`;

export const SubTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 20px;
`;

export const TextBox = styled.div`
	margin: 10px 10px 10px 12px;
	width: 50%;
	padding: 20px;

	& div {
		display: flex;
		align-items: center;
		margin-bottom: 4px;
	}

	& p {
		padding-top: 8px;
	}
`;

export const Text = styled.div`
	margin-left: 8px;
	font-weight: 400;

	& div {
		font-weight: 400;
	}
`;

export const Paragraph = styled.div`
	line-height: 1.5;
`;

export const PlaceWrap = styled.div`
	display: flex;
	margin-bottom: 12px;
`;

export const Place = styled.div`
	font-weight: 400;
	margin-left: 4px;
`;

export const Description = styled.div`
	display: inline-block;
	padding: 8px 12px;
	font-weight: 300;
	background-color: var(--color-light-blue);
	border-radius: 6px;
`;

export const DescriptionSpan = styled.span`
	display: inline-block;
	padding: 8px 12px;
	font-weight: 300;
	background-color: var(--color-light-blue);
	border-radius: 6px;
`;
