import { useDispatch, useSelector } from 'react-redux';
import { CommunityState, SET_COMMENT_LIST } from '../../slice/communitySlice';
import { ButtonWrap, Form, TextArea } from './RegisterCommentForm.style';
import { getBoard, postComment } from '../../api/communityApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BoardDetail } from '../../types/BoardTypes';
import { useQuery } from 'react-query';

interface RootState {
	community: CommunityState;
}

const RegisterCommentForm = () => {
	const [text, setText] = useState<string>('');
	const displayLabel = useSelector(
		(state: RootState) => state.community.displayLabel,
	);
	const dispatch = useDispatch();

	const { myPetId, mateId, tipId, lostId } = useParams();

	const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const fetchPostComment = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await postComment(
			displayLabel === '나의 댕냥이'
				? 'my_pet'
				: displayLabel === '댕냥 꿀팁'
				  ? 'tips'
				  : displayLabel === '댕냥 메이트'
				    ? 'mate'
				    : 'lost',
			displayLabel === '나의 댕냥이'
				? myPetId
				: displayLabel === '댕냥 꿀팁'
				  ? tipId
				  : displayLabel === '댕냥 메이트'
				    ? mateId
				    : lostId,
			text,
		);

		refetch();
		setText('');

		return response;
	};

	const fetchGetDetailBoard = async (): Promise<BoardDetail> => {
		const response = await getBoard(
			displayLabel === '나의 댕냥이'
				? 'my_pet'
				: displayLabel === '댕냥 꿀팁'
				  ? 'tips'
				  : displayLabel === '댕냥 메이트'
				    ? 'mate'
				    : displayLabel === '댕냥 미아센터'
				      ? 'lost'
				      : '',
			displayLabel === '나의 댕냥이'
				? myPetId
				: displayLabel === '댕냥 꿀팁'
				  ? tipId
				  : displayLabel === '댕냥 메이트'
				    ? mateId
				    : lostId,
		);

		return response;
	};

	const { data, refetch } = useQuery(
		displayLabel === '나의 댕냥이'
			? 'myPetDetailBoard'
			: displayLabel === '댕냥 꿀팁'
			  ? 'tipDetailBoard'
			  : displayLabel === '댕냥 메이트'
			    ? 'mateDetailBoard'
			    : 'lostDetailBoard',
		fetchGetDetailBoard,
	);

	useEffect(() => {
		if (data) {
			dispatch(SET_COMMENT_LIST(data.comments));
		}
	}, [data]);

	return (
		<Form onSubmit={fetchPostComment}>
			<div>user 닉네임</div>
			<TextArea
				placeholder="댓글쓰기"
				value={text}
				onChange={textAreaChangeHandler}
			/>
			<ButtonWrap>
				<button type="submit">등록</button>
			</ButtonWrap>
		</Form>
	);
};

export default RegisterCommentForm;
