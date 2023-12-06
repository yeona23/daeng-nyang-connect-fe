import { BsBookmarkFill } from 'react-icons/bs';

const NewFamilyDetail = () => {
	return (
		<div>
			<div>
				<div>
					<img src="" alt="" />
					<BsBookmarkFill color={'#ffffff70'} size={40} />
				</div>
				<div>
					<div>
						<div>
							<img src="assets/animal3" alt="" />
						</div>
						<div>iamzipsa</div>
					</div>
					<div>
						<p>이름 : </p>
						<p>나이 : </p>
						<p>품종 : </p>
						<p>질병 : </p>
						<p>훈련 여부: </p>
						<p>중성화 여부 : </p>
						<p>검강검진 여부 :</p>
						<p>이별 사유 : </p>
						<p>그 외 특이사항: </p>
					</div>
					<button>문의하기</button>
				</div>
			</div>
			<div>
				<div></div>
			</div>
		</div>
	);
};

export default NewFamilyDetail;
