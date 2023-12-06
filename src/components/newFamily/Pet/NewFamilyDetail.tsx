import { BsBookmarkFill } from 'react-icons/bs';
import {
	DetailImageBox,
	DetailSwiper,
	DetailTextBox,
	NewFamilyDetailContainer,
	UserThumbnail,
} from '../NewFamily.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
	id: number;
	index: number;
	itemTitle: string;
	age: string;
}

const generateImgUrl = (index: number): string => {
	const maxIndex = 4;
	const actualIndex = index <= maxIndex ? index : (index % maxIndex) + 1;
	return `/assets/animal${actualIndex}.jpg`;
};

const NewFamilyDetail = () => {
	const navigate = useNavigate();

	const items: Item[] = Array.from({ length: 8 }, (_, index) => ({
		id: index + 1,
		index: index + 1,
		itemTitle: '냥냥',
		age: '3년 2개월',
	}));

	const [bookmarkState, setBookmarkState] = useState<{
		[key: number]: boolean;
	}>({});

	const clickBookmarkHandler = (itemId: number) => {
		setBookmarkState((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
	};

	const goToDetailPage = (petId: number) => {
		navigate(`/newFamily/pet/${petId}`);
	};

	return (
		<div>
			<NewFamilyDetailContainer>
				<DetailImageBox>
					<img src="/assets/animal1.jpg" alt="" />
					<BsBookmarkFill color={'#ffffff70'} size={40} />
				</DetailImageBox>
				<div>
					<UserThumbnail>
						<div>
							<img src="/assets/animal2.jpg" alt="" />
						</div>
						<div>iamzipsa</div>
					</UserThumbnail>
					<DetailTextBox>
						<p>이름 : </p>
						<p>나이 : </p>
						<p>품종 : </p>
						<p>질병 : </p>
						<p>훈련 여부: </p>
						<p>중성화 여부 : </p>
						<p>검강검진 여부 :</p>
						<p>이별 사유 : </p>
						<p>그 외 특이사항: </p>
					</DetailTextBox>
					<button>문의하기</button>
				</div>
			</NewFamilyDetailContainer>
			<DetailSwiper>
				<div>
					<div>
						<img src="" alt="" />
					</div>
				</div>
			</DetailSwiper>
		</div>
	);
};

export default NewFamilyDetail;
