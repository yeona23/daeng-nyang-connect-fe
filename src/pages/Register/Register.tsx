import { ChangeEvent, useRef, useState } from 'react';

import {
	ExParagraph,
	Logo,
	Option,
	Paragraph,
	RegisterButton,
	RegisterDiv,
	RegisterDoubleDiv,
	RegisterForm,
	RegisterInput,
	RegisterInputSmall,
	RegisterSelectBox,
	RegisterWrapper,
} from './Register.style';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../components/Register/Modal/ConfirmModal/ConfirmModal';
import { useResponsive } from '../../hooks/useResponsive';

const Register = () => {
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	const navigate = useNavigate();
	const [isSignUpClicked, setIsSignUpClicked] = useState(false);

	const [nameIsValid, setNameIsValid] = useState(false);
	const [nameOnFocus, setNameOnFocus] = useState(false);
	const [nameIsTouched, setNameIsTouched] = useState(false);

	const [mobileIsValid, setMobileISValid] = useState(false);
	const [mobileOnFocus, setMobileOnFocus] = useState(false);
	const [mobileIsTouched, setMobileIsTouched] = useState(false);

	const [emailIsValid, setEmailIsValid] = useState(false);
	const [emailOnFocus, setEmailOnFocus] = useState(false);
	const [emailIsTouched, setEmailIsTouched] = useState(false);

	const [enteredPassword, setEnteredPassword] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [passwordOnFocus, setPasswordOnFocus] = useState(false);
	const [passwordIsToched, setPasswordIsTouched] = useState(false);

	const [pwdckIsValid, setPwdckIsValid] = useState(false);
	const [pwdckOnFocus, setPwdckOnFocus] = useState(false);
	const [pwdckIsTouched, setPwdckIsTouched] = useState(false);

	const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
	const [allIsValid, setAllisValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false);

	const [inputValue, setInputValue] = useState({
		name: null,
		email: '',
		password: '',
		pwdck: '',
		mobile: '',
	});

	interface ConfirmModalProps {
		open: boolean;
		onClose: () => void;
	}

	const isPasswordValid = (password: string) => {
		if (password.length < 6) {
			return false;
		}

		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasDigit = /\d/.test(password);
		const hasSpecialChar = /[!@#$%^&*()\-_=+[\]{};:'",<.>/?\\|]/.test(password);

		const conditionsMet =
			hasSpecialChar && (hasUpperCase || hasLowerCase || hasDigit);
		return conditionsMet;
	};

	const regExpName = /^[가-힣]{2,4}$/;
	const regExpMobile = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

	const nameFocusHandler = () => {
		setNameOnFocus(true);
		setNameIsValid(true);
	};
	const nameOnBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNameIsTouched(true);
		setNameOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'name') {
			if (regExpName.test(e.target.value)) {
				setNameIsValid(true);
			} else {
				setNameIsValid(false);
			}
		}
	};

	const emailOnFocusHandler = () => {
		setEmailOnFocus(true);
		setEmailIsValid(true);
	};
	const emailOnBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setEmailIsTouched(true);
		setEmailOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'email') {
			if (e.target.value.trim() === '') {
				setEmailIsValid(false);
			}
			if (/^.+@.+\..+$/.test(e.target.value)) {
				setEmailIsValid(true);
			} else {
				setEmailIsValid(false);
			}
		}
	};

	const mobileOnFocusHandler = () => {
		setMobileOnFocus(true);
		setMobileISValid(true);
	};
	const mobileOnBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMobileIsTouched(true);
		setMobileOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'mobile') {
			if (regExpMobile.test(e.target.value)) {
				setMobileISValid(true);
			} else {
				setMobileISValid(false);
			}
		}
	};

	const passwordOnFocusHandler = () => {
		setPasswordOnFocus(true);
		setPasswordIsValid(true);
	};
	const passwordOnBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setPasswordIsTouched(true);
		setPasswordOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'password') {
			if (e.target.value.trim() === '') {
				setPasswordIsValid(false);
			}
			if (!isPasswordValid(e.target.value)) {
				setPasswordIsValid(false);
			} else {
				setPasswordIsValid(true);
				setEnteredPassword(e.target.value);
			}
		}
	};

	const pwdckOnFocusHandler = () => {
		setPwdckOnFocus(true);
	};

	const pwdckOnBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setPwdckIsTouched(true);
		setPwdckOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'pwdck') {
			if (e.target.value === enteredPassword) {
				setPwdckIsValid(true);
			}
		}
	};

	const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		setTextIsTouched(true);

		if (
			nameIsValid &&
			mobileIsValid &&
			emailIsValid &&
			passwordIsValid &&
			pwdckIsValid
		) {
			setAllisValid(true);
		}
	};

	const registerUserHandler = () => {
		// e.preventDefault();
		// if (allIsValid) {
		// 	try {
		// 		const response = await registerUser(inputValue);
		// 		if (!response) return;
		// 		setConfirmModalIsOpen(true);
		// 		// navigate('/login');
		// 	} catch (error) {
		// 		if (error.response.status === '406') {
		// 			alert(error.message);
		// 		}
		// 		console.error(error.message);
		// 	} finally {
		// 		setIsSignUpClicked(true);
		// 	}
		// }
	};

	const nameNameInputIsInValid = !nameIsValid && nameIsTouched;
	const nameMobileInputIsInvalid = !mobileIsValid && mobileIsTouched;
	const nameEmailInputIsInValid = !emailIsValid && emailIsTouched;
	const namePasswordInputIsInValid = !passwordIsValid && passwordIsToched;
	const nameConfirmedPasswordIsInvalid =
		pwdckIsTouched && inputValue.pwdck !== inputValue.password;

	return (
		<RegisterWrapper>
			<RegisterDiv
				$isMobile={$isMobile}
				$isTablet={$isTablet}
				$isPc={$isPc}
				$isMaxWidth={$isMaxWidth}>
				<Logo
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}
					src="assets/logos/LOGO(footer).svg"></Logo>
				<RegisterForm onSubmit={registerUserHandler}>
					<RegisterInput
						placeholder="이메일"
						type="text"
						name="email"
						onChange={inputValueHandler}
						onFocus={emailOnFocusHandler}
						onBlur={emailOnBlurHandler}
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}></RegisterInput>
					{nameEmailInputIsInValid && (
						<Paragraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							올바른 이메일 형식으로 입력해주세요.
						</Paragraph>
					)}
					{emailOnFocus && (
						<ExParagraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							이메일 형식으로 입력해주세요.
						</ExParagraph>
					)}

					<RegisterInput
						placeholder="비밀번호"
						type="password"
						name="password"
						onFocus={passwordOnFocusHandler}
						onBlur={passwordOnBlurHandler}
						onChange={inputValueHandler}
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}></RegisterInput>
					{namePasswordInputIsInValid && (
						<Paragraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소 6자리 이상이여야
							합니다.
						</Paragraph>
					)}
					{passwordOnFocus && (
						<ExParagraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							영문, 숫자, 특수문자 중 2개 이상을 포함한 6자리 이상으로
							입력해주세요.
						</ExParagraph>
					)}
					<RegisterInput
						placeholder="비밀번호 확인"
						type="password"
						name="pwdck"
						onFocus={pwdckOnFocusHandler}
						onBlur={pwdckOnBlurHandler}
						onChange={inputValueHandler}
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}></RegisterInput>
					{nameConfirmedPasswordIsInvalid && (
						<Paragraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							비밀번호가 일치하지 않습니다.
						</Paragraph>
					)}
					<RegisterDoubleDiv
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						<RegisterInputSmall
							type="text"
							placeholder="이름"
							name="name"
							onFocus={nameFocusHandler}
							onBlur={nameOnBlurHandler}
							onChange={inputValueHandler}
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}></RegisterInputSmall>

						<RegisterInputSmall
							placeholder="닉네임"
							type="password"
							name="pwdck"
							onFocus={pwdckOnFocusHandler}
							onBlur={pwdckOnBlurHandler}
							onChange={inputValueHandler}
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}></RegisterInputSmall>
					</RegisterDoubleDiv>
					{nameOnFocus && (
						<ExParagraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							ex&#41;홍길동
						</ExParagraph>
					)}
					{nameNameInputIsInValid && (
						<Paragraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							이름을 올바르게 입력해주세요.
						</Paragraph>
					)}
					<RegisterInput
						type="text"
						placeholder="전화번호"
						name="mobile"
						onFocus={mobileOnFocusHandler}
						onChange={inputValueHandler}
						onBlur={mobileOnBlurHandler}
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}></RegisterInput>
					{mobileOnFocus && (
						<ExParagraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							ex&#41;000-0000-0000
						</ExParagraph>
					)}
					{nameMobileInputIsInvalid && (
						<Paragraph
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							전화번호를 바르게 입력해주세요.
						</Paragraph>
					)}

					<RegisterDoubleDiv
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						<RegisterInputSmall
							type="text"
							placeholder="시 도"
							name="name"
							onFocus={nameFocusHandler}
							onBlur={nameOnBlurHandler}
							onChange={inputValueHandler}
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}></RegisterInputSmall>

						<RegisterInputSmall
							placeholder="상세주소"
							type="password"
							name="pwdck"
							onFocus={pwdckOnFocusHandler}
							onBlur={pwdckOnBlurHandler}
							onChange={inputValueHandler}
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}></RegisterInputSmall>
					</RegisterDoubleDiv>
					<RegisterDoubleDiv
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						<RegisterSelectBox
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}
							name="gender"
							required>
							<Option value="" disabled selected>
								성별
							</Option>
							<Option value="man">남성</Option>
							<Option value="woman">여성</Option>
						</RegisterSelectBox>

						<RegisterSelectBox
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}
							name="experience"
							required>
							<Option value="" disabled selected>
								키워본 경험
							</Option>
							<Option value="man">있음</Option>
							<Option value="woman">없음</Option>
						</RegisterSelectBox>
					</RegisterDoubleDiv>

					<RegisterButton
						type="submit"
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						회원가입
					</RegisterButton>
					{confirmModalIsOpen && (
						<ConfirmModal
							onClose={() => {
								setConfirmModalIsOpen(false);
							}}
						/>
					)}
				</RegisterForm>
			</RegisterDiv>
		</RegisterWrapper>
	);
};

export default Register;
