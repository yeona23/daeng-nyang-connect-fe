import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import {
	CloseButton,
	Contents,
	DeleteButton,
	ModalForm,
	ModalInput,
	ModalWrap,
	Overlay,
	TitleDiv,
} from './AddressChangeModal.style';

interface AddressChangeModalProps {
	open: boolean;
	onClose: (isClosed: boolean) => void;
}

const AddressChangeModal: FC<AddressChangeModalProps> = ({ onClose, open }) => {
	const [address, setAddress] = useState('');
	const [detailAddress, setDetailAddress] = useState('');

	const handleAddressChange = () => {
		// Implement the logic to handle address change
		// You can use 'address' and 'detailAddress' state values here
	};

	return (
		<Overlay>
			<ModalWrap>
				<Contents>
					<TitleDiv>
						<h1>Address Change</h1>
					</TitleDiv>
					<ModalForm>
						<ModalInput
							type="text"
							placeholder="변경할 주소를 입력해주세요."
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<ModalInput
							type="text"
							placeholder="상세 주소를 입력해주세요."
							value={detailAddress}
							onChange={(e) => setDetailAddress(e.target.value)}
						/>
						<DeleteButton onClick={handleAddressChange}>
							Address Change
						</DeleteButton>
						<CloseButton onClick={() => onClose(false)}>Close</CloseButton>
					</ModalForm>
				</Contents>
			</ModalWrap>
		</Overlay>
	);
};

AddressChangeModal.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default AddressChangeModal;
