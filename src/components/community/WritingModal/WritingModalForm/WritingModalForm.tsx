import { useDispatch, useSelector } from 'react-redux';
import {
	CommunityState,
	SET_CATEGORY,
	SET_GENDER,
	SET_INPUT_VALUE,
	SET_KIND_PET,
} from '../../../../slice/communitySlice';
import {
	ButtonWrap,
	CheckInput,
	InfoWrap,
	InputWrap,
	LabelTitle,
	LabelWrap,
	ModalForm,
	TextInput,
	Title,
} from './WritingModalForm.style';
import { useEffect, useState } from 'react';

interface RootState {
	community: CommunityState;
}

const WritingModalForm = () => {
	const [inputValue, setInputValue] = useState({
		place: '',
		lost_date: '',
		lost_time: '',
		lost_minute: '',
		breed: '',
		color: '',
		mobile: '',
		reward: 0,
		text: '',
		title: '',
	});
	const dispatch = useDispatch();
	const displayLabel = useSelector(
		(state: RootState) => state.community.displayLabel,
	);
	const petKind = useSelector((state: RootState) => state.community.kind);
	const category = useSelector((state: RootState) => state.community.category);
	const gender = useSelector((state: RootState) => state.community.gender);

	const communityState = useSelector((state: RootState) => state.community);

	useEffect(() => {
		console.log(communityState);
	}, [communityState]);

	const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const updatedInputValue = { ...inputValue, [name]: value };

		setInputValue(updatedInputValue);
		dispatch(SET_INPUT_VALUE(updatedInputValue));
	};

	const textareaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		const updatedInputValue = { ...inputValue, [name]: value };

		setInputValue(updatedInputValue);
		dispatch(SET_INPUT_VALUE(updatedInputValue));
	};

	const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		switch (name) {
			case 'petKind':
				dispatch(SET_KIND_PET(value));
				break;
			case 'tip':
			case 'mate':
			case 'lost':
				dispatch(SET_CATEGORY(value));
				break;
			case 'gender':
				dispatch(SET_GENDER(value));
				break;
			default:
				break;
		}
	};

	return (
		<ModalForm>
			<Title>{displayLabel} 글쓰기</Title>
			<InfoWrap>
				{(displayLabel === '댕냥 꿀팁' ||
					displayLabel === '댕냥 메이트' ||
					displayLabel === '댕냥 미아센터') && (
					<LabelWrap>
						<LabelTitle htmlFor="category">카테고리</LabelTitle>
						<InputWrap>
							<div>
								<label
									htmlFor={
										displayLabel === '댕냥 꿀팁'
											? 'item'
											: displayLabel === '댕냥 메이트'
											  ? 'mate'
											  : 'find'
									}>
									{displayLabel === '댕냥 꿀팁'
										? '용품 리뷰'
										: displayLabel === '댕냥 메이트'
										  ? '산책 메이트'
										  : '찾아주세요'}
								</label>
								<CheckInput
									type="radio"
									name={
										displayLabel === '댕냥 꿀팁'
											? 'tip'
											: displayLabel === '댕냥 메이트'
											  ? 'mate'
											  : 'lost'
									}
									value={
										displayLabel === '댕냥 꿀팁'
											? 'item'
											: displayLabel === '댕냥 메이트'
											  ? 'mate'
											  : 'find'
									}
									onChange={radioChangeHandler}
									checked={
										displayLabel === '댕냥 꿀팁'
											? category === 'item'
											: displayLabel === '댕냥 메이트'
											  ? category === 'mate'
											  : category === 'find'
									}
								/>
							</div>
							<div>
								<label
									htmlFor={
										displayLabel === '댕냥 꿀팁'
											? 'center'
											: displayLabel === '댕냥 메이트'
											  ? 'care'
											  : 'found'
									}>
									{displayLabel === '댕냥 꿀팁'
										? '병원 리뷰'
										: displayLabel === '댕냥 메이트'
										  ? '맡아주실 분'
										  : '발견했어요'}
								</label>
								<CheckInput
									type="radio"
									name={
										displayLabel === '댕냥 꿀팁'
											? 'tip'
											: displayLabel === '댕냥 메이트'
											  ? 'mate'
											  : 'lost'
									}
									value={
										displayLabel === '댕냥 꿀팁'
											? 'center'
											: displayLabel === '댕냥 메이트'
											  ? 'care'
											  : 'found'
									}
									onChange={radioChangeHandler}
									checked={
										displayLabel === '댕냥 꿀팁'
											? category === 'center'
											: displayLabel === '댕냥 메이트'
											  ? category === 'care'
											  : category === 'found'
									}
								/>
							</div>
							{displayLabel === '댕냥 꿀팁' && (
								<div>
									<label htmlFor="etc">그 외</label>
									<CheckInput
										type="radio"
										name="tip"
										value="etc"
										onChange={radioChangeHandler}
										checked={category === 'etc'}
									/>
								</div>
							)}
						</InputWrap>
					</LabelWrap>
				)}
				{(displayLabel === '댕냥 메이트' ||
					displayLabel === '댕냥 미아센터') && (
					<LabelWrap>
						<LabelTitle htmlFor="place">장소</LabelTitle>
						<TextInput
							type="text"
							name="place"
							value={inputValue.place}
							onChange={inputChangeHandler}
						/>
					</LabelWrap>
				)}
				{displayLabel === '댕냥 미아센터' && (
					<LabelWrap>
						<LabelTitle htmlFor="lost_date">날짜</LabelTitle>
						<TextInput
							type="date"
							name="lost_date"
							value={inputValue.lost_date}
							onChange={inputChangeHandler}
						/>
					</LabelWrap>
				)}
				{displayLabel === '댕냥 미아센터' && (
					<LabelWrap>
						<LabelTitle htmlFor="lost_time">시간</LabelTitle>
						<TextInput
							type="time"
							name="lost_time"
							value={inputValue.lost_time}
							onChange={inputChangeHandler}
						/>
					</LabelWrap>
				)}
				{displayLabel === '댕냥 꿀팁' && (
					<LabelWrap>
						<LabelTitle htmlFor="title">제목</LabelTitle>
						<TextInput
							type="text"
							name="title"
							value={inputValue.title}
							onChange={inputChangeHandler}
						/>
					</LabelWrap>
				)}
				{(displayLabel === '나의 댕냥이' ||
					displayLabel === '댕냥 미아센터') && (
					<LabelWrap>
						<LabelTitle htmlFor="kind">반려동물 종류</LabelTitle>
						<InputWrap>
							<div>
								<label htmlFor="dog">강아지</label>
								<CheckInput
									type="radio"
									name="petKind"
									value="dog"
									onChange={radioChangeHandler}
									checked={petKind === 'dog'}
								/>
							</div>
							<div>
								<label htmlFor="cat">고양이</label>
								<CheckInput
									type="radio"
									name="petKind"
									value="cat"
									onChange={radioChangeHandler}
									checked={petKind === 'cat'}
								/>
							</div>
							<div>
								<label htmlFor="etc">그 외</label>
								<CheckInput
									type="radio"
									name="petKind"
									value="etc"
									onChange={radioChangeHandler}
									checked={petKind === 'etc'}
								/>
							</div>
						</InputWrap>
					</LabelWrap>
				)}
				{displayLabel === '댕냥 미아센터' && (
					<LabelWrap>
						<LabelTitle htmlFor="breed">품종</LabelTitle>
						<TextInput
							type="text"
							name="breed"
							value={inputValue.breed}
							onChange={inputChangeHandler}
						/>
					</LabelWrap>
				)}
				{displayLabel === '댕냥 미아센터' && (
					<LabelWrap>
						<LabelTitle htmlFor="kind">성별</LabelTitle>
						<InputWrap>
							<div>
								<label htmlFor="male">남자</label>
								<CheckInput
									type="radio"
									name="gender"
									value="male"
									onChange={radioChangeHandler}
									checked={gender === 'male'}
								/>
							</div>
							<div>
								<label htmlFor="female">여자</label>
								<CheckInput
									type="radio"
									name="gender"
									value="female"
									onChange={radioChangeHandler}
									checked={gender === 'female'}
								/>
							</div>
							<div>
								<label htmlFor="middle">중성</label>
								<CheckInput
									type="radio"
									name="gender"
									value="middle"
									onChange={radioChangeHandler}
									checked={gender === 'middle'}
								/>
							</div>
						</InputWrap>
					</LabelWrap>
				)}
				{displayLabel === '댕냥 미아센터' && (
					<LabelWrap>
						<LabelTitle htmlFor="color">색깔</LabelTitle>
						<TextInput
							type="text"
							name="color"
							value={inputValue.color}
							onChange={inputChangeHandler}
						/>
					</LabelWrap>
				)}
				{displayLabel === '댕냥 미아센터' && (
					<LabelWrap>
						<LabelTitle htmlFor="mobile">전화번호</LabelTitle>
						<TextInput
							type="tel"
							placeholder="000-0000-0000 형식으로 입력해주세요."
							name="mobile"
							value={inputValue.mobile}
							onChange={inputChangeHandler}
						/>
					</LabelWrap>
				)}
				{displayLabel === '댕냥 미아센터' && (
					<LabelWrap>
						<LabelTitle htmlFor="reward">사례금</LabelTitle>
						<TextInput
							type="number"
							step="10000"
							name="reward"
							value={inputValue.reward}
							onChange={inputChangeHandler}
						/>
					</LabelWrap>
				)}
				<LabelWrap>
					<LabelTitle htmlFor="text">상세 설명</LabelTitle>
					<textarea
						name="text"
						id="text"
						value={inputValue.text}
						onChange={textareaChangeHandler}></textarea>
				</LabelWrap>
				<LabelWrap>
					<LabelTitle htmlFor="images">이미지 등록</LabelTitle>
					<input type="file" multiple />
				</LabelWrap>
			</InfoWrap>
			<ButtonWrap>
				<button>등록하기</button>
			</ButtonWrap>
		</ModalForm>
	);
};

export default WritingModalForm;
