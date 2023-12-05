import { useNavigate } from 'react-router-dom';
import { MyPet } from '../MyPetRoot';
import { MyPetLi, UserWrap } from './MyPetList.style';
import { CiUser } from 'react-icons/ci';

interface MyPetListProps {
	list: MyPet;
}

const MyPetList = ({ list }: MyPetListProps) => {
	const navigate = useNavigate();

	const moveToTheDetailPage = (id: number) => {
		navigate(`/community/myPets/myPet/${id}`);
	};

	return (
		<MyPetLi onClick={() => moveToTheDetailPage(list.id)}>
			<div>
				<img src="/assets/cat.jpeg" alt="" />
			</div>
			<UserWrap>
				<div>
					<CiUser />
				</div>
				<span>{list.userName}</span>
			</UserWrap>
		</MyPetLi>
	);
};

export default MyPetList;
