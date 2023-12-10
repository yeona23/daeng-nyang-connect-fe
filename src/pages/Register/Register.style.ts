import styled from 'styled-components';

interface ResponsiveProps {
	$isMobile: boolean;
	$isTablet: boolean;
	$isPc: boolean;
	$isMaxWidth: boolean;
}

export const RegisterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

export const RegisterDiv = styled.div<ResponsiveProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-top: ${(props) => (props.$isMobile ? '150px' : '')};
	padding-bottom: ${(props) => (props.$isMobile ? '150px' : '')};
`;

export const Logo = styled.img<ResponsiveProps>`
	width: ${(props) => (props.$isMobile ? '150px' : '200px')};
	height: ${(props) => (props.$isMobile ? '150px' : '200px')};
`;

export const RegisterInput = styled.input<ResponsiveProps>`
	width: ${(props) => (props.$isMobile ? '70%' : '100%')};
	height: 35px;
	margin-bottom: 16px;
	border: none;
	padding-left: 16px;
	font-size: 16px;
	box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	&:hover {
		box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.5);
	}
	&:focus {
		box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.5);
		outline: none;
	}
`;

export const RegisterSelectBox = styled.select<ResponsiveProps>`
	width: ${(props) => (props.$isMobile ? '300px' : '208px')};
	height: 35px;
	margin-bottom: 16px;
	border: none;
	padding-left: 16px;
	font-size: 16px;
	box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	&:required:invalid {
		color: #808080;
	}
	&:hover {
		box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.5);
	}
	&:focus {
		box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.5);
		outline: none;
	}
	option[value=''][disabled] {
		display: none;
	}
	option {
		color: #111;
	}
`;

export const Option = styled.option``;

export const RegisterInputSmall = styled(RegisterInput)`
	width: ${(props) => (props.$isMobile ? '35%' : '49%')};
`;

export const RegisterDoubleDiv = styled.div<ResponsiveProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: ${(props) => (props.$isMobile ? '200%' : '100%')};
	flex-direction: ${(props) => (props.$isMobile ? 'column' : '')};
`;

export const RegisterForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-bottom: 40px;
`;

export const RegisterButton = styled.button<ResponsiveProps>`
	background-color: rgba(227, 155, 166, 0.9);
	color: white;
	padding: 8px, 52px, 8px, 52px;
	width: ${(props) => (props.$isMobile ? '70%' : '100%')};
	height: 42px;
	font-size: 20px;
	font-weight: 400;
	border-radius: 10px;
	box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);

	&:hover {
		cursor: pointer;
		background-color: rgba(227, 155, 166, 1);
	}
`;

export const SnsIconDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
	width: 427px;
	height: 50px;
	border-top: 1px solid #434343;
`;

export const Paragraph = styled.p`
	width: 90%;
	text-align: left;
	font-size: 12px;
	color: var(--color--deep-blue);
`;

export const ExParagraph = styled.p`
	width: 90%;
	text-align: left;
	font-size: 12px;
`;

export const ProfileImgLabel = styled.label`
	margin: 5px 0 20px 0;
	font-size: 16px;
	color: var(--color-main-text);
	display: inline-block;
	cursor: pointer;
`;

export const ProfileImgInput = styled.input`
	display: none;
`;

export const ProfileImgDiv = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	overflow: hidden;
	border: 2px solid var(--color-main-text);
`;

export const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
