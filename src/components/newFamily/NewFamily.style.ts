import { styled } from 'styled-components';

interface ResponsiveProps {
	$isMobile: boolean;
	$isTablet: boolean;
	$isPc: boolean;
	$isMaxWidth: boolean;
}

export const FindFamily = styled.div<ResponsiveProps>`
	width: ${(props) => (props.$isMaxWidth ? '1320px' : '100%')};
	padding: ${(props) => (props.$isMaxWidth ? 'none' : '0 30px')};
	margin: 0 auto;
	& > div {
		display: flex;
		gap: 50px;
	}

	.register-fixed-btn {
		display: ${(props) => (props.$isPc ? 'none' : 'block')};
		position: fixed;
		bottom: 50px;
		right: 50px;
		cursor: pointer;
	}

	.register-btn {
		display: ${(props) => (props.$isPc ? 'block' : 'none')};
	}

	.filter-btn {
		display: ${(props) => (props.$isPc ? 'none' : 'block')};
	}
`;

export const CategoryTitle = styled.div<ResponsiveProps>`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 20px;
	margin: 70px 0 50px 0;
	border-bottom: 1px solid var(--color-light-salmon);

	& h1 {
		font-size: ${(props) =>
			props.$isPc ? '36px' : props.$isTablet ? '24px' : '16px'};
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

export const FilterItems = styled.div<ResponsiveProps>`
	flex: 1;
	position: ${(props) => (props.$isPc ? 'unset' : 'fixed')};
	top: 0;
	left: 0;
	width: ${(props) => (props.$isPc ? 'inherit' : '100%')};
	height: ${(props) => (props.$isPc ? 'fit-content' : '100vh')};
	padding: 20px;
	border: 1px solid var(--color-light-salmon);
	border-radius: ${(props) => (props.$isPc ? '10px' : 'none')};
	background: #fff;
	z-index: 10;

	& > div:first-child {
		padding-bottom: 10px;
		margin-bottom: 40px;
		border-bottom: 1px solid var(--color-light-salmon);
		font-size: 20px;
	}
	& > div:last-child {
		display: flex;
		flex-direction: column;
		gap: 40px;

		& > div:last-child input {
			width: 100%;
			height: 35px;
			padding: 10px;
			border: 1px solid var(--color-light-salmon);
			border-radius: 5px;
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

	.filter-close-btn {
		display: ${(props) => (props.$isPc ? 'none' : 'block')};
		position: absolute;
		top: 15px;
		right: 15px;
		cursor: pointer;
	}
`;

export const ItemList = styled.div`
	display: flex;
	flex: 3;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const ItemBox = styled.div<ResponsiveProps>`
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
		top: ${(props) =>
			props.$isMobile ? '10px' : props.$isTablet ? '20px' : '30px'};
		right: ${(props) =>
			props.$isMobile ? '10px' : props.$isTablet ? '20px' : '30px'};
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

export const NewFamilyDetailContainer = styled.div<ResponsiveProps>`
	display: flex;
	flex-direction: ${(props) => (props.$isPc ? 'row' : 'column')};
	gap: 50px;
	width: ${(props) => (props.$isMaxWidth ? '1320px' : '100%')};
	padding: ${(props) => (props.$isMaxWidth ? '0' : '0 30px')};
	margin: 70px auto 0 auto;
	font-size: 21px;

	& > div:last-child {
		width: ${(props) => (props.$isPc ? 'calc(100% - 550px)' : '100%')};
		position: relative;
	}

	& button {
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

	.user-box-mobile {
		display: ${(props) => (props.$isPc ? 'none' : 'display')};
	}

	.user-box-pc {
		display: ${(props) => (props.$isPc ? 'display' : 'none')};
	}
`;

export const DetailImageBox = styled.div<ResponsiveProps>`
	display: flex;
	justify-content: center;
	position: relative;
	width: ${(props) => (props.$isPc ? '500px' : '100%')};
	height: ${(props) => (props.$isPc ? '500px' : 'auto')};
	aspect-ratio: ${(props) => (props.$isPc ? 'unset' : '1/1')};
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
		width: 45px;
		height: 45px;
		border-radius: 50%;
		overflow: hidden;
		cursor: pointer;
	}

	& h5 {
		font-weight: 400;
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
	z-index: 10;

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

export const DetailTextBox = styled.div<ResponsiveProps>`
	display: flex;
	flex-direction: column;
	gap: 15px;
	flex: 1;
	margin: 30px 0;

	& p {
		overflow-wrap: break-word;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: normal;
	}
`;

//NewFamilyDetailSwiper
export const DetailSwiper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 520px;
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

//PetRegistration

export const PetRegistrationForm = styled.div<ResponsiveProps>`
	position: ${(props) => (props.$isPc ? 'unset' : 'absolute')};
	top: 0;
	left: 0;
	width: ${(props) => (props.$isPc ? '1320px' : '100%')};
	padding: ${(props) => (props.$isMaxWidth ? 'none' : '0 30px')};
	margin: 0 auto;
	background: #fff;

	& > div:last-child {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	& h5 {
		width: 80px;
		margin-right: 30px;
		font-weight: 400;
	}

	& button {
		width: 420px;
		padding: 5px;
		margin-top: ${(props) => (props.$isPc ? '150px' : '60px')};
		margin-bottom: ${(props) => (props.$isPc ? '0' : '30px')};
		border: 1px solid var(--color-light-salmon);
		border-radius: 5px;
		background: var(--color-light-salmon);
		color: var(--color-peach);
		font-size: 16px;
		cursor: pointer;
	}

	.register-title {
		margin: ${(props) => (props.$isPc ? '70px 0 50px 0' : '50px 0 30px 0')};
	}

	.register-close-btn {
		display: ${(props) => (props.$isPc ? 'none' : 'display')};
		cursor: pointer;
	}
`;

export const FormText = styled.div<ResponsiveProps>`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	.text-box {
		align-items: flex-start;
	}

	& textarea {
		width: 90%;
		height: 150px;
		resize: none;
		padding: 10px;
		outline: none;
	}

	& > div {
		display: flex;
		align-items: center;
		width: ${(props) => (props.$isPc ? 'calc((100% - 100px) / 2)' : '100%')};
		margin-bottom: 30px;
	}

	& input[type='text'] {
		width: 80%;
		height: 30px;
		padding-left: 10px;
		outline: none;
	}

	& input[type='radio'] {
		margin: 0;
		margin-right: 10px;
	}

	& input[name='breed'] {
		width: 30%;
		margin-right: 30px;
	}

	& input[name='age'] {
		width: 30%;
	}

	& label {
		margin-right: 30px;
	}
`;
