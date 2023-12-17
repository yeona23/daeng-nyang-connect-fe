import React, { ChangeEvent, useState } from 'react';
import {
	FindButton,
	FindDiv,
	FindForm,
	FindInput,
	FindTitleDiv,
	FindWrapper,
	Logo,
	Paragraph,
	SignUpButton,
	SignUpDiv,
} from './IdFind.style';
import { useResponsive } from '../../../hooks/useResponsive';
import { useNavigate } from 'react-router-dom';
import { findId, findPassword } from '../../../api/authApi';

const IdFind = () => {
	const navigate = useNavigate();
	const [isHandlerClicked, setIsHandlerClicked] = useState(false);
	const [nameIsValid, setNameIsValid] = useState(false);
	const [mobileIsValid, setMobileIsValid] = useState(false);
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();
	const [textIsTouched, setTextIsTouched] = useState(false || isHandlerClicked);
	const [inputValue, setInputValue] = useState({
		name: '',
		mobile: '',
		email: '',
		newPassword: '',
	});
	const regExpName = /^[가-힣]{2,4}$/;
	const regExpMobile = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

	const [nameOnFocus, setNameOnFocus] = useState(false);
	const [mobileOnFocus, setMobileOnFocus] = useState(false);

	const nameOnFocusHandler = () => {
		setNameOnFocus(true);
		setNameIsValid(true);
	};
	const nameOnBlurHandler = () => {
		setNameOnFocus(false);
	};

	const mobileOnFocusHandler = () => {
		setMobileOnFocus(true);
		setMobileIsValid(true);
	};

	const mobileOnBlurHandler = () => {
		setMobileOnFocus(false);
	};

	const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });

		setTextIsTouched(true);

		if (name === 'name') {
			if (name === 'name') {
				if (regExpName.test(e.target.value)) {
					setNameIsValid(true);
				} else {
					setNameIsValid(false);
				}
			}
		}

		if (name === 'mobile') {
			if (regExpMobile.test(e.target.value)) {
				setMobileIsValid(true);
			} else {
				setMobileIsValid(false);
			}
		}
	};

	const loginUserHandler = async (e: React.FormEvent) => {
		e.preventDefault();

		if (nameIsValid && mobileIsValid) {
			try {
				const response = await findPassword(inputValue);
				console.log(response);

				if (!response) return;
			} catch (error) {
				if (error instanceof TypeError) {
					// TypeError
				} else if (error instanceof SyntaxError) {
					// SyntaxError
				} else if (typeof error === 'string') {
					// string
				} else {
					// other
				}
			}
		}

		setIsHandlerClicked(true);
	};

	const onRegisterClick = () => {
		navigate('/register');
	};

	const onLoginClick = () => {
		navigate('/login');
	};

	const onPasswordFindClick = () => {
		navigate('/passwordFind');
	};

	const NameInputIsInValid = !nameIsValid && textIsTouched && isHandlerClicked;
	const MobileInputIsInValid =
		!mobileIsValid && textIsTouched && isHandlerClicked;

	return (
		<FindWrapper>
			<FindDiv>
				<FindTitleDiv>
					<Logo
						src="assets/logos/LOGO(footer).svg"
						alt=""
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}
					/>
				</FindTitleDiv>
				<FindForm onSubmit={loginUserHandler}>
					<FindInput
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}
						onFocus={nameOnFocusHandler}
						onBlur={nameOnBlurHandler}
						placeholder="이름"
						type="text"
						name="name"
						onChange={inputValueHandler}></FindInput>
					{NameInputIsInValid && (
						<Paragraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							올바른 이름을 입력해주세요.
						</Paragraph>
					)}
					{nameOnFocus && (
						<Paragraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							ex)홍길동
						</Paragraph>
					)}
					<FindInput
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}
						placeholder="전화번호"
						type="text"
						name="mobile"
						onChange={inputValueHandler}
						onFocus={mobileOnFocusHandler}
						onBlur={mobileOnBlurHandler}></FindInput>
					{MobileInputIsInValid && (
						<Paragraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							올바른 전화번호를 입력해주세요
						</Paragraph>
					)}
					{mobileOnFocus && (
						<Paragraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							ex)010-0000-0000
						</Paragraph>
					)}
					<FindButton
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}
						type="submit">
						아이디 찾기
					</FindButton>
				</FindForm>
				<SignUpDiv>
					<SignUpButton onClick={onLoginClick}>로그인 페이지로</SignUpButton>
					<SignUpButton onClick={onRegisterClick}>회원가입</SignUpButton>
					<SignUpButton onClick={onPasswordFindClick}>
						비밀번호 찾기
					</SignUpButton>
				</SignUpDiv>
			</FindDiv>
		</FindWrapper>
	);
};

export default IdFind;
