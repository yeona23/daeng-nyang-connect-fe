import React, { FC, useState } from 'react';
import {
	CloseButton,
	Contents,
	DeleteButton,
	ModalForm,
	ModalInput,
	ModalWrap,
	Overlay,
	TitleDiv,
} from './TelChangeModal.style';

interface AddressChangeModalProps {
	open: boolean;
	onClose: (isClosed: boolean) => void;
}

const TelChangeModal: FC<AddressChangeModalProps> = ({ open, onClose }) => {
	return (
		<Overlay>
			<ModalWrap>
				<Contents>
					<TitleDiv>
						<h1>Phone Number Change</h1>
					</TitleDiv>
					<ModalForm>
						<ModalInput
							type="text"
							placeholder="변경할 휴대폰 번호를 입력해주세요."></ModalInput>
						<DeleteButton>Phone Number Change</DeleteButton>
						<CloseButton
							onClick={() => {
								onClose(false);
							}}>
							Close
						</CloseButton>
					</ModalForm>
				</Contents>
			</ModalWrap>
		</Overlay>
	);
};

export default TelChangeModal;
