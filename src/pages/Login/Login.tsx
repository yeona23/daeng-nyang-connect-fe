import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	AccountDiv,
	Button,
	ButtonWrapper,
	Image,
	LoginButton,
	LoginDiv,
	LoginForm,
	LoginInput,
	LoginTitleDiv,
	LoginWrapper,
	Logo,
	Paragraph,
	SignUpButton,
	SignUpDiv,
} from './Login.style';
import localToken from '../../api/LocalToken';
import { useResponsive } from '../../hooks/useResponsive';

const Login = () => {
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();
	const navigate = useNavigate();
	const onRegisterClick = () => {
		navigate('/register');
	};
	const [isSignInClicked, setIsSignInClicked] = useState(false);
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false || isSignInClicked);
	const [inputValue, setInputValue] = useState({
		email: '',
		password: '',
	});

	const REST_API_KEY = '백엔드한테 달라하자1';
	const REDIRECT_URI = '백엔드한테 달라하자2';
	const kakaoLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	const kakaoLoginHandler = () => {
		window.location.href = kakaoLink;
	};

	const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });

		setTextIsTouched(true);

		if (name === 'email') {
			if (e.target.value.trim() === '') {
				setEmailIsValid(false);
			}
			if (e.target.value.length > 0 && /^.+@.+\..+$/.test(e.target.value)) {
				setEmailIsValid(true);
			} else {
				setEmailIsValid(false);
			}
		}

		if (name === 'password') {
			if (e.target.value.trim() === '') {
				setPasswordIsValid(false);
			}

			if (e.target.value.length > 0 && e.target.value.length < 6) {
				setPasswordIsValid(false);
			} else setPasswordIsValid(true);
		}
	};

	const loginUserHandler = () => {
		// e.preventDefault();
		// if (emailIsValid && passwordIsValid) {
		// 	try {
		// 		const response = await loginUser(inputValue);
		// 		if (!response) return;
		// 		const { access_token } = response;
		// 		const saveToken = (token) => {
		// 			localToken.save(token);
		// 		};
		// 		if (access_token) {
		// 			saveToken(access_token);
		// 			navigate('/');
		// 		}
		// 	} catch (error) {
		// 		if (error.response.code === 'ERR_NETWORK') {
		// 			console.log('테스트');
		// 		}
		// 		if (error.response.status === '403') {
		// 			console.error(error.message);
		// 		}
		// 		console.error(error.message);
		// 	}
		// }
		// setIsSignInClicked(true);
	};

	const nameEmailInputIsInValid =
		!emailIsValid && textIsTouched && isSignInClicked;
	const namePasswordInputIsInValid =
		!passwordIsValid && textIsTouched && isSignInClicked;

	return (
		<LoginWrapper>
			<LoginDiv>
				<LoginTitleDiv>
					<Logo
						src="assets/logos/LOGO(footer).svg"
						alt=""
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}
					/>
				</LoginTitleDiv>
				<LoginForm onSubmit={loginUserHandler}>
					<LoginInput
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}
						placeholder="아이디"
						type="text"
						name="email"
						onChange={inputValueHandler}></LoginInput>
					{nameEmailInputIsInValid && (
						<Paragraph>올바른 이메일 형식으로 입력해주세요.</Paragraph>
					)}
					<LoginInput
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}
						placeholder="비밀번호"
						type="password"
						name="password"
						onChange={inputValueHandler}></LoginInput>
					{namePasswordInputIsInValid && (
						<Paragraph>비밀번호는 최소 6자리 이상이어야 합니다.</Paragraph>
					)}
					<LoginButton
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}
						type="submit">
						로그인
					</LoginButton>
				</LoginForm>
				<SignUpDiv>
					<SignUpButton>아이디 찾기</SignUpButton>
					<SignUpButton>비밀번호 찾기</SignUpButton>
					<SignUpButton onClick={onRegisterClick}>회원가입</SignUpButton>
				</SignUpDiv>
				<ButtonWrapper>
					<Button>
						<Image
							src="/assets/icons/icon-kakao.png"
							alt="kakao-icon"
							onClick={kakaoLoginHandler}
						/>
					</Button>
					<Button>
						<Image src="/assets/icons/icon-naver.png" alt="twitter-icon" />
					</Button>
					<Button>
						<Image src="/assets/icons/icon-apple.svg" alt="apple-icon" />
					</Button>
					<Button>
						<Image src="/assets/icons/icon-google.svg" alt="google-icon" />
					</Button>
				</ButtonWrapper>
			</LoginDiv>
		</LoginWrapper>
	);
};

export default Login;
