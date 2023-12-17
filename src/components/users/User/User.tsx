import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import {
	DeleteYourAccountDiv,
	GenderDiv,
	ModalDiv,
	ProductRegisterButton,
	ProfileImg,
	ProfileImgDiv,
	ProfileImgInput,
	ProfileImgLabel,
	SignOutDiv,
	UserBox,
	UserContent,
	UserItemContentDiv,
	UserItemDiv,
	UserItemTitleDiv,
	UserLeftItemDiv,
	UserLeftItemDivWrapper,
	UserNameDiv,
	UserNamePhotoDiv,
	UserPhotoDiv,
	UserRightItemDiv,
	UserWrapper,
} from './User.style';
import { useNavigate } from 'react-router';
import TelChangeModal from '../TelChangeModal/TelChangeModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import AddressChangeModal from '../AddressChangeModal/AddressChangeModal';
import localToken from '../../../api/LocalToken';
import { logoutUser, myPageGet } from '../../../api/authApi';
import { useDispatch } from 'react-redux';
import { LOGOUT_USER } from '../../../slice/userSlice';
import { useResponsive } from '../../../hooks/useResponsive';

const User = () => {
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();
	const [imgFile, setImgFile] = useState('');
	const imgRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [deleteIsOpen, deleteSetIsOpen] = useState(false);
	const [addressIsOpen, addressSetIsOpen] = useState(false);
	const [telIsOpen, telSetIsOpen] = useState(false);
	const [passwordIsOpen, passwordSetIsOpen] = useState(false);

	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		mobile: '',
		nickname: '',
		city: '',
		town: '',
		info: '',
		img: null,
		gender: '',
		experience: null,
	});

	const getMyInfo = async () => {
		try {
			const response = await myPageGet();
			console.log(response.nickname);
			if (response) {
				// API 응답에서 필요한 정보를 추출하여 state 업데이트
				setUserInfo({
					name: response.name || '',
					email: response.email || '',
					mobile: response.mobile || '',
					nickname: response.nickname || '',
					city: response.city || '',
					town: response.town || '',
					info: response.info || '',
					img: response.img || '',
					gender: response.gender || '',
					experience: response.experience || null,
				});
			}
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
	};

	useEffect(() => {
		getMyInfo(); // 컴포넌트가 마운트되면 사용자 정보 가져오기
	}, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

	const passwordOnClickButton = () => {
		passwordSetIsOpen(true);
	};

	const telOnClickButton = () => {
		telSetIsOpen(true);
	};

	const deleteOnClickButton = () => {
		deleteSetIsOpen(true);
	};

	const addressOnClickButton = () => {
		addressSetIsOpen(true);
	};

	const logoutHandler = async () => {
		try {
			await logoutUser();
			dispatch(LOGOUT_USER());
			localToken.remove();
			navigate('/');
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
	};

	interface AddressChangeModalProps {
		open: boolean;
		onClose: () => void;
	}

	return (
		<UserWrapper>
			<UserBox>
				<UserContent>
					<UserItemDiv>
						<UserNamePhotoDiv>
							<UserPhotoDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								<ProfileImgDiv>
									<ProfileImg />
									<ProfileImgInput />
								</ProfileImgDiv>
							</UserPhotoDiv>
							<UserNameDiv>이름</UserNameDiv>
						</UserNamePhotoDiv>
						<UserLeftItemDivWrapper
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							<UserItemTitleDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								소개글
							</UserItemTitleDiv>
							<UserLeftItemDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								안녕하세요
							</UserLeftItemDiv>
							<ModalDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								변경
							</ModalDiv>
						</UserLeftItemDivWrapper>
						<UserLeftItemDivWrapper
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							<UserItemTitleDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								주소
							</UserItemTitleDiv>
							<UserLeftItemDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								대한민국 서울특별시 청와대 주소 123-456
							</UserLeftItemDiv>
							<ModalDiv
								onClick={addressOnClickButton}
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								변경
							</ModalDiv>
							{addressIsOpen && (
								<AddressChangeModal
									open={addressIsOpen}
									onClose={() => {
										addressSetIsOpen(false);
									}}
								/>
							)}
						</UserLeftItemDivWrapper>
						<UserLeftItemDivWrapper
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							<UserItemTitleDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								이메일
							</UserItemTitleDiv>
							<UserLeftItemDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								asdasd@asdasd.com
							</UserLeftItemDiv>
							<ModalDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								변경
							</ModalDiv>
						</UserLeftItemDivWrapper>
						<UserLeftItemDivWrapper
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							<UserItemTitleDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								전화번호
							</UserItemTitleDiv>
							<UserLeftItemDiv
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								010-0000-0000
							</UserLeftItemDiv>
							<ModalDiv
								onClick={telOnClickButton}
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								변경
							</ModalDiv>
							{telIsOpen && (
								<TelChangeModal
									open={telIsOpen}
									onClose={() => {
										telSetIsOpen(false);
									}}
								/>
							)}
						</UserLeftItemDivWrapper>
					</UserItemDiv>
				</UserContent>
				<UserContent>
					<SignOutDiv
						onClick={logoutHandler}
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						로그아웃
					</SignOutDiv>
					<SignOutDiv
						onClick={logoutHandler}
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						비밀번호 변경
					</SignOutDiv>
					<SignOutDiv
						onClick={deleteOnClickButton}
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						계정삭제
					</SignOutDiv>
					{deleteIsOpen && (
						<DeleteModal
							open={deleteIsOpen}
							onClose={() => {
								deleteSetIsOpen(false);
							}}
						/>
					)}
				</UserContent>
			</UserBox>
		</UserWrapper>
	);
};

export default User;
