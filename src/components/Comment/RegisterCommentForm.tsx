import { ButtonWrap, Form, TextArea } from './RegisterCommentForm.style';

const RegisterCommentForm = () => {
	return (
		<Form>
			<div>user 닉네임</div>
			<TextArea placeholder="댓글쓰기" />
			<ButtonWrap>
				<button>등록</button>
			</ButtonWrap>
		</Form>
	);
};

export default RegisterCommentForm;
