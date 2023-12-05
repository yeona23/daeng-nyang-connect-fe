import { CommentForm } from '../community/MyPet/MyPetDetail/MyPetDetail';
import { CiUser } from 'react-icons/ci';
import { CiMenuKebab } from 'react-icons/ci';
import {
	CommentLi,
	InfoWrap,
	KebabWrap,
	TextWrap,
	UserImageWrap,
} from './Comment.style';

interface CommentFormProps {
	list: CommentForm;
}

const Comment = ({ list }: CommentFormProps) => {
	return (
		<CommentLi>
			<InfoWrap>
				<UserImageWrap>
					<CiUser />
				</UserImageWrap>
				<TextWrap>
					<div>{list.nickname}</div>
					<div>{list.comment}</div>
					<div>{list.created_at}</div>
				</TextWrap>
			</InfoWrap>
			<KebabWrap>
				<CiMenuKebab />
			</KebabWrap>
		</CommentLi>
	);
};

export default Comment;
