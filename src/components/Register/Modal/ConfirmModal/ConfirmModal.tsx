import { useNavigate } from 'react-router-dom';
import {
	CloseButton,
	Contents,
	DeleteButton,
	ModalForm,
	ModalInput,
	ModalWrap,
	Overlay,
	TitleDiv,
} from './ConfirmModal.style';
import PropTypes from 'prop-types';

interface ConfirmModalProps {
	onClose: (flag: boolean) => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onClose }) => {
	const navigate = useNavigate();
	return (
		<Overlay>
			<ModalWrap>
				<Contents>
					<TitleDiv>
						<div>
							<h1>계정 생성이 완료되었습니다!</h1>
						</div>
						<CloseButton
							onClick={() => {
								onClose(false);
								navigate('/login');
							}}>
							Close
						</CloseButton>
					</TitleDiv>
				</Contents>
			</ModalWrap>
		</Overlay>
	);
};

ConfirmModal.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default ConfirmModal;
