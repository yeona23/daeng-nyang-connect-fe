import { useNavigate } from 'react-router-dom';
import NewFamilyList from './NewFamilyList';
import { CategoryTitle, FilterItems, FindFamily } from '../NewFamily.style';

const Family = () => {
	const navigate = useNavigate();

	const clickRegistrationHandler = () => {
		const url = '/newFamily/registration';
		navigate(url);
	};

	return (
		<FindFamily>
			<CategoryTitle>
				<h1>새로운 가족 찾기</h1>
				<button onClick={clickRegistrationHandler}>등록하기</button>
			</CategoryTitle>
			<div>
				<FilterItems>
					<div>찾기</div>
					<div>
						<div>
							<p>축종</p>
							<input type="radio" name="animalType" id="all" />
							<label htmlFor="all">전체</label>
							<input type="radio" name="animalType" id="dog" />
							<label htmlFor="dog">개</label>
							<input type="radio" name="animalType" id="cat" />
							<label htmlFor="cat">고양이</label>
						</div>
						<div>
							<p>지역</p>
							<input
								type="text"
								name="location"
								id="location"
								placeholder="지역을 입력해주세요"
							/>
						</div>
					</div>
				</FilterItems>
				<NewFamilyList />
			</div>
		</FindFamily>
	);
};

export default Family;
