import { CiMenuKebab } from 'react-icons/ci';
import {
	CommentLi,
	InfoWrap,
	KebabWrap,
	TextWrap,
	UserImageWrap,
} from './Comment.style';
import { useResponsive } from '../../hooks/useResponsive';
import { BoardComment } from '../../types/BoardTypes';

interface CommentFormProps {
	list: BoardComment;
}

const Comment = ({ list }: CommentFormProps) => {
	const { $isTablet, $isMobile } = useResponsive();

	return (
		<CommentLi>
			<InfoWrap>
				<UserImageWrap $isMobile={$isMobile} $isTablet={$isTablet}>
					<img src={list.userThumbnail} alt="" />
				</UserImageWrap>
				<TextWrap $isMobile={$isMobile} $isTablet={$isTablet}>
					<div>{list.nickname}</div>
					<div>{list.comment}</div>
					<div>{list.createdAt}</div>
				</TextWrap>
			</InfoWrap>
			<KebabWrap>
				<CiMenuKebab />
			</KebabWrap>
		</CommentLi>
	);
};

export default Comment;
