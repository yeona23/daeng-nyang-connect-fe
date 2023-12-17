import styled from 'styled-components';
import { useRef, useState } from 'react';
import {
	AccountDiv,
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
import { logoutUser } from '../../../api/authApi';
import { useDispatch } from 'react-redux';
import { LOGOUT_USER } from '../../../slice/userSlice';

const User = () => {
	const [imgFile, setImgFile] = useState('');
	const imgRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [deleteIsOpen, deleteSetIsOpen] = useState(false);
	const [addressIsOpen, addressSetIsOpen] = useState(false);
	const [telIsOpen, telSetIsOpen] = useState(false);
	const [passwordIsOpen, passwordSetIsOpen] = useState(false);

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

	const defaultUserImage = '/assets/icons/icon-user.png';

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
							<UserPhotoDiv>
								<ProfileImgDiv>
									<ProfileImg />
									<ProfileImgInput />
								</ProfileImgDiv>
							</UserPhotoDiv>
							<UserNameDiv>이름</UserNameDiv>
						</UserNamePhotoDiv>
						<UserLeftItemDivWrapper>
							<UserItemTitleDiv>소개글</UserItemTitleDiv>
							<UserLeftItemDiv>안녕하세요</UserLeftItemDiv>
							<ModalDiv>변경</ModalDiv>
						</UserLeftItemDivWrapper>
						<UserLeftItemDivWrapper>
							<UserItemTitleDiv>주소</UserItemTitleDiv>
							<UserLeftItemDiv>
								<UserItemContentDiv>
									대한민국 서울특별시 청와대 주소 123-456
								</UserItemContentDiv>
							</UserLeftItemDiv>
							<ModalDiv onClick={addressOnClickButton}>변경</ModalDiv>
							{addressIsOpen && (
								<AddressChangeModal
									open={addressIsOpen}
									onClose={() => {
										addressSetIsOpen(false);
									}}
								/>
							)}
						</UserLeftItemDivWrapper>
						<UserLeftItemDivWrapper>
							<UserItemTitleDiv>이메일</UserItemTitleDiv>
							<UserLeftItemDiv>
								<UserItemContentDiv>asdasd@asdasd.com</UserItemContentDiv>
							</UserLeftItemDiv>
							<ModalDiv>변경</ModalDiv>
						</UserLeftItemDivWrapper>
						<UserLeftItemDivWrapper>
							<UserItemTitleDiv>전화번호</UserItemTitleDiv>
							<UserLeftItemDiv>
								<UserItemContentDiv>010-000-00000</UserItemContentDiv>
							</UserLeftItemDiv>
							<ModalDiv onClick={telOnClickButton}>변경</ModalDiv>
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
					<SignOutDiv onClick={logoutHandler}>로그아웃</SignOutDiv>
					<SignOutDiv onClick={logoutHandler}>비밀번호 변경</SignOutDiv>
					<SignOutDiv onClick={deleteOnClickButton}>계정삭제</SignOutDiv>
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
