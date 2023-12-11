import { useNavigate } from 'react-router-dom';
import { useResponsive } from '../../../hooks/useResponsive';
import {
	CategoryTitle,
	FormText,
	PetRegistrationForm,
} from '../NewFamily.style';
import { IoCloseOutline } from 'react-icons/io5';

const PetRegistration = () => {
	const navigate = useNavigate();
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	const clickCloseBtnHandler = () => {
		const url = '/newFamily';
		navigate(url);
	};

	return (
		<PetRegistrationForm
			$isMobile={$isMobile}
			$isTablet={$isTablet}
			$isPc={$isPc}
			$isMaxWidth={$isMaxWidth}>
			<CategoryTitle
				$isMobile={$isMobile}
				$isTablet={$isTablet}
				$isPc={$isPc}
				$isMaxWidth={$isMaxWidth}
				className="register-title">
				<h1>파양 신청서</h1>
				<IoCloseOutline
					className="register-close-btn"
					size={25}
					onClick={clickCloseBtnHandler}
				/>
			</CategoryTitle>
			<div>
				<FormText
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}>
					<div>
						<h5>동물 이름</h5>
						<input type="text" name="animal_name" id="animal_name" required />
					</div>
					<div>
						<h5>축종</h5>
						<input type="radio" name="kind" id="all" />
						<label htmlFor="all">전체</label>
						<input type="radio" name="kind" id="dog" />
						<label htmlFor="dog">강아지</label>
						<input type="radio" name="kind" id="cat" />
						<label htmlFor="cat">고양이</label>
					</div>
					<div>
						<h5>지역</h5>
						<select id="regionSelect">
							<option value="" disabled selected hidden>
								지역을 선택해주세요
							</option>
							<option value="seoul">서울</option>
							<option value="busan">부산</option>
							<option value="incheon">인천</option>
							<option value="daegu">대구</option>
							<option value="gwangju">광주</option>
							<option value="daejeon">대전</option>
							<option value="ulsan">울산</option>
							<option value="sejong">세종</option>
							<option value="gyeonggi">경기</option>
							<option value="gangwon">강원</option>
							<option value="chungbuk">충북</option>
							<option value="chungnam">충남</option>
							<option value="jeonbuk">전북</option>
							<option value="jeonnam">전남</option>
							<option value="gyeongbuk">경북</option>
							<option value="gyeongnam">경남</option>
							<option value="jeju">제주</option>
						</select>
					</div>
					<div>
						<h5>성별</h5>
						<input type="radio" name="gender" id="male" />
						<label htmlFor="male">남</label>
						<input type="radio" name="gender" id="female" />
						<label htmlFor="female">여</label>
					</div>
					<div>
						<h5>품종</h5>
						<input type="text" name="breed" id="breed" required />
						<h5>/&nbsp;&nbsp;&nbsp;&nbsp;나이</h5>
						<input type="text" name="age" id="age" required />
					</div>
					<div>
						<h5>질병</h5>
						<input type="text" name="disease" id="disease" required />
					</div>
					<div>
						<h5>훈련 여부</h5>
						<input type="radio" name="training" id="training_yes" />
						<label htmlFor="training_yes">예</label>
						<input type="radio" name="training" id="training_no" />
						<label htmlFor="training_no">아니오</label>
					</div>
					<div>
						<h5>중성화 여부</h5>
						<input type="radio" name="neutralization" id="neutralization_yes" />
						<label htmlFor="neutralization_yes">예</label>
						<input type="radio" name="neutralization" id="neutralization_no" />
						<label htmlFor="neutralization_no">아니오</label>
					</div>
					<div>
						<h5>검강검진</h5>
						<input type="radio" name="health" id="health_yes" />
						<label htmlFor="health_yes">예</label>
						<input type="radio" name="health" id="health_no" />
						<label htmlFor="health_no">아니오</label>
					</div>
					<div>
						<h5>양육 기간</h5>
						<input
							type="text"
							name="period"
							id="period"
							placeholder="2년 3개월"
							required
						/>
					</div>
					<div>
						<h5>이미지 등록</h5>
						<input type="file" name="img" id="fileInput" required />
						<label htmlFor="fileInput" className="custom-file-upload">
							파일 선택
						</label>
					</div>
					<div className="text-box">
						<h5>이별 사유</h5>
						<textarea name="" id=""></textarea>
					</div>
					<div className="text-box">
						<h5>특이 사항</h5>
						<textarea name="" id=""></textarea>
					</div>
				</FormText>
				<button type="submit">등록하기</button>
			</div>
		</PetRegistrationForm>
	);
};

export default PetRegistration;
