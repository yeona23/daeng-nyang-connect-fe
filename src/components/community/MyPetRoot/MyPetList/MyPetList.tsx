import { MyPet } from '../MyPetRoot';
import { MyPetLi, UserWrap } from './MyPetList.style';
import { CiUser } from 'react-icons/ci';

interface MyPetListProps {
	list: MyPet;
}

const MyPetList = ({ list }: MyPetListProps) => {
	return (
		<MyPetLi>
			<div>
				<img src="/assets/cat.jpeg" alt="" />
			</div>
			<UserWrap>
				{/* <img src={list.userThumbnail} alt="" /> */}
				<div>
					<CiUser />
				</div>
				<span>{list.userName}</span>
			</UserWrap>
		</MyPetLi>
	);
};

export default MyPetList;
