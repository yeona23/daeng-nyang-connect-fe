import { CategoryTitle } from '../NewFamily.style';

const PetRegistration = () => {
	return (
		<div>
			<CategoryTitle>
				<h1>파양 신청서</h1>
			</CategoryTitle>
			<div>
				<div>
					<div>
						<h5>동물 이름</h5>
						<input type="text" name="animal_name" id="animal_name" />
					</div>
					<div>
						<h5>축종</h5>
						<label htmlFor="all">전체</label>
						<input type="text" name="kind" id="all" />
						<label htmlFor="dog">강아지</label>
						<input type="text" name="kind" id="dog" />
						<label htmlFor="cat">고양이</label>
						<input type="text" name="kind" id="cat" />
					</div>
					<div>
						<h5>성별</h5>
						<label htmlFor="male">남</label>
						<input type="radio" name="gender" id="male" />
						<label htmlFor="female">여</label>
						<input type="radio" name="gender" id="female" />
					</div>
					<div>
						<h5>품종</h5>
						<input type="text" name="breed" id="breed" />
						<h5>나이</h5>
						<input type="text" name="age" id="age" />
					</div>
					<div>
						<h5>질병</h5>
						<input type="text" name="disease" id="disease" />
					</div>
					<div>
						<h5>훈련 여부</h5>
						<label htmlFor="training_yes">예</label>
						<input type="text" name="training" id="training_yes" />
						<label htmlFor="training_no">아니오</label>
						<input type="text" name="training" id="training_no" />
					</div>
					<div>
						<h5>중성화 여부</h5>
						<label htmlFor="neutralization_yes">예</label>
						<input type="text" name="neutralization" id="neutralization_yes" />
						<label htmlFor="neutralization_no">아니오</label>
						<input type="text" name="neutralization" id="neutralization_no" />
					</div>
					<div>
						<h5>검강검진</h5>
						<label htmlFor="health_yes">예</label>
						<input type="text" name="health" id="health_yes" />
						<label htmlFor="health_no">아니오</label>
						<input type="text" name="health" id="health_no" />
					</div>
					<div>
						<h5>양육 기간</h5>
						<input
							type="text"
							name="period"
							id="period"
							placeholder="2년 3개월"
						/>
					</div>
					<div>
						<h5>이미지 등록</h5>
						<input type="img" name="img" id="img" />
					</div>
					<div>
						<h5>이별 사유</h5>
						<input type="text" name="text_reason" id="text_reason" />
					</div>
					<div>
						<h5>특이 사항</h5>
						<input
							type="text"
							name="text_etc"
							id="text_etc"
							placeholder="물을 좋아하는 수속성 냥이입니다"
						/>
					</div>
				</div>
				<button>등록하기</button>
			</div>
		</div>
	);
};

export default PetRegistration;
