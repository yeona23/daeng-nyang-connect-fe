import { useNavigate } from 'react-router-dom';
import { LostPet } from '../LostRoot';
import {
	Button,
	ButtonWrap,
	ImgWrap,
	LostLi,
	TextWrap,
} from './LostList.style';

interface LostPetProps {
	list: LostPet;
}

const LostList = ({ list }: LostPetProps) => {
	const navigate = useNavigate();

	const moveToTheDetailPage = (id: number) => {
		navigate(`/community/losts/lost/${id}`);
	};

	return (
		<LostLi onClick={() => moveToTheDetailPage(list.id)}>
			<ImgWrap>
				<img src="/assets/cat.jpeg" alt="" />
			</ImgWrap>
			<TextWrap>
				<div>잃어버린 곳 : {list.place}</div>
				<div>
					잃어버린 일시 : {list.lost_date}
					{'  '}
					{list.lost_time}시 {list.lost_minute}분{'  '}경
				</div>
				<p>{list.text}</p>
			</TextWrap>
			<ButtonWrap>
				<Button>채팅하기</Button>
			</ButtonWrap>
		</LostLi>
	);
};

export default LostList;
