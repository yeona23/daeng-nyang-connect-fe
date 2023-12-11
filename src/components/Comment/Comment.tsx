import { CommentForm } from './../community/Tip/TipDetail/TipDetail';
import { CiUser } from 'react-icons/ci';
import { CiMenuKebab } from 'react-icons/ci';
import {
	CommentLi,
	InfoWrap,
	KebabWrap,
	TextWrap,
	UserImageWrap,
} from './Comment.style';
import { useResponsive } from '../../hooks/useResponsive';

interface CommentFormProps {
	list: CommentForm;
}

const Comment = ({ list }: CommentFormProps) => {
	const { $isTablet, $isMobile } = useResponsive();

	return (
		<CommentLi>
			<InfoWrap>
				<UserImageWrap $isMobile={$isMobile} $isTablet={$isTablet}>
					<CiUser />
				</UserImageWrap>
				<TextWrap $isMobile={$isMobile} $isTablet={$isTablet}>
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
