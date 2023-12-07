import { styled } from 'styled-components';

//Reviews

export const ReviewsContainer = styled.div`
	width: 1320px;
	margin: 0 auto;
`;

export const ReviewsList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
`;

export const ReviewBox = styled.div`
	display: flex;
	flex-direction: column;
	width: calc((100% - 100px) / 3);
	aspect-ratio: 3 / 4.2;
	margin-bottom: 50px;
	border: 1px solid var(--color-deep-blue);
	border-radius: 10px;
	overflow: hidden;

	& > div:first-child {
		display: flex;
		justify-content: center;
		position: relative;
		width: 100%;
		aspect-ratio: 3.5 / 3;
		overflow: hidden;
	}

	& > div:last-child {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		padding: 20px;
	}

	& img {
		width: 100%;
		transition: all 0.5s;
	}

	& img:hover {
		scale: 1.1;
	}
	& button {
		padding: 4px 25px;
		border: 1px solid var(--color-light-salmon);
		border-radius: 5px;
		cursor: pointer;
	}
	& button:hover {
		background: var(--color-light-salmon);
		color: var(--color-peach);
	}

	& p {
		display: -webkit-box;
		margin-bottom: 15px;
		overflow-wrap: break-word;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: normal;
	}

	& svg {
		cursor: pointer;
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
`;
