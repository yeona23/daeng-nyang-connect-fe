import { styled } from 'styled-components';

export const FindFamily = styled.div`
	width: 1320px;
	margin: 0 auto;

	& > div {
		display: flex;
		gap: 50px;
	}
`;

export const CategoryTitle = styled.div`
	justify-content: space-between;
	width: 100%;
	padding-bottom: 20px;
	margin: 70px 0 50px 0;
	border-bottom: 1px solid var(--color-light-salmon);

	& h1 {
		font-size: 36px;
	}
	& button {
		width: 150px;
		padding: 3px;
		border: 1px solid var(--color-light-salmon);
		border-radius: 5px;
		font-size: 16px;
	}
	& button:hover {
		background: var(--color-light-salmon);
		color: var(--color-peach);
	}
`;

export const FilterItems = styled.div`
	flex: 1;
	height: fit-content;
	padding: 20px;
	border: 1px solid var(--color-light-salmon);
	border-radius: 10px;

	& > div:first-child {
		padding-bottom: 10px;
		margin-bottom: 40px;
		border-bottom: 1px solid var(--color-light-salmon);
		font-size: 20px;
	}
	& > div:nth-child(2) {
		display: flex;
		flex-direction: column;
		gap: 40px;

		& > div:last-child input {
			width: 100%;
			padding: 3px;
			border: 1px solid var(--color-light-salmon);
			outline: none;
		}
	}
	& p {
		margin-bottom: 15px;
		font-size: 18px;
	}

	& label {
		margin: 0 20px 0 5px;
	}
`;

export const ItemList = styled.div`
	display: flex;
	flex: 3;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const ItemBox = styled.div`
	width: calc((100% - 50px) / 2);
	margin-bottom: 50px;
	border: 1px solid var(--color-deep-blue);
	border-radius: 10px;
	overflow: hidden;

	& > div:first-child {
		display: flex;
		justify-content: center;
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3;
		overflow: hidden;
	}

	& > div:last-child {
		position: relative;
		height: 150px;
		padding: 20px;
	}

	& img {
		width: 100%;
		transition: all 0.5s;
	}

	& img:hover {
		scale: 1.1;
	}

	& svg {
		position: absolute;
		top: 30px;
		right: 30px;
		cursor: pointer;
	}

	& button {
		position: absolute;
		bottom: 20px;
		right: 20px;
		padding: 5px 20px;
		border: 1px solid var(--color-light-salmon);
		border-radius: 5px;
		cursor: pointer;
	}
	& button:hover {
		background: var(--color-light-salmon);
		color: var(--color-peach);
	}

	& p {
		margin-bottom: 15px;
	}
`;

//NewFamilyDetail

export const NewFamilyDetailContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 100px;
	width: 1320px;
	margin: 70px auto 0 auto;
	font-size: 21px;
	& > div {
		flex: 1;
	}

	& > div:last-child {
		position: relative;
	}

	& button {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 5px;
		margin-top: 20px;
		border: 1px solid var(--color-light-salmon);
		border-radius: 5px;
		background: var(--color-light-salmon);
		color: var(--color-peach);
		font-size: 20px;
		cursor: pointer;
	}
	& button:hover {
		background: #fff;
		color: var(--color-deep-blue);
	}
`;

export const DetailImageBox = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	position: relative;
	aspect-ratio: 1 / 1;
	border-radius: 10px;
	overflow: hidden;
	& img {
		height: 100%;
	}
	& svg {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
	}
`;

export const UserThumbnail = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	position: relative;
	padding-bottom: 10px;
	border-bottom: 1px solid var(--color-deep-blue);

	& div:first-child {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		overflow: hidden;
		cursor: pointer;
	}

	& img {
		height: 100%;
	}

	& svg {
		position: absolute;
		right: 0;
		cursor: pointer;
	}
`;

export const MoreDropdown = styled.ul`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 0px;
	top: 40px;
	width: 120px;
	height: 85px;
	border: 1px solid var(--color-light-salmon);
	background: #fff;
	font-size: 16px;

	& li {
		display: flex;
		align-items: center;
		flex: 1;
		padding-left: 15px;
		cursor: pointer;
	}

	& li:first-child {
		border-bottom: 1px solid var(--color-light-salmon);
	}
`;

export const DetailTextBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-top: 30px;
`;

//NewFamilyDetailSwiper
export const DetailSwiper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 530px;
	margin-top: 150px;
	background: var(--color-peach);

	.swiper {
		width: 100%;
	}

	.swiper-wrapper {
		width: inherit;
	}

	.swiper-slide {
		height: 330px;
		border-radius: 10px;
		background: #fff;
		overflow: hidden;
	}

	.swiper-slide div:first-child {
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 2.5;
		overflow: hidden;

		& svg {
			position: absolute;
			top: 20px;
			right: 20px;
		}
	}

	.swiper-slide div:last-child {
		padding: 20px;

		& p {
			margin-bottom: 15px;
		}
	}

	.swiper-slide img {
		width: 100%;
	}
`;
