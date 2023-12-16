import { useNavigate } from 'react-router-dom';
import { useResponsive } from '../../../hooks/useResponsive';
import {
	CategoryTitle,
	FormText,
	PetRegistrationForm,
} from '../NewFamily.style';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { registerAnimal } from '../../../api/NewFamilyApi';

const PetRegistration = () => {
	const navigate = useNavigate();
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();
	const [formData, setFormData] = useState({
		animalId: '',
		animalName: '',
		kind: '',
		region: '',
		gender: '',
		breed: '',
		age: '',
		disease: '',
		training: '',
		neutering: false,
		healthCheck: '',
		nurturePeriod: '',
		image: '',
		textReason: '',
		textEtc: '',
		adoptionStatus: '',
		createAt: '',
	});

	const changeHandler = (e: {
		target: { name: any; value: any; type: any; checked: any };
	}) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const clickCloseBtnHandler = () => {
		const url = '/newFamily';
		navigate(url);
	};

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const createdAnimal = await registerAnimal(formData);

			console.log('생성되었습니다', createdAnimal);
			navigate('/newFamily');
		} catch (error) {
			console.error('생성 오류:', error);
		}
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
					$isMaxWidth={$isMaxWidth}
					onSubmit={submitHandler}>
					<div>
						<h5>동물 이름</h5>
						<input
							type="text"
							name="animal_name"
							id="animal_name"
							onChange={changeHandler}
							required
						/>
					</div>
					<div>
						<h5>축종</h5>
						<input type="radio" name="kind" id="dog" onChange={changeHandler} />
						<label htmlFor="dog">강아지</label>
						<input type="radio" name="kind" id="cat" onChange={changeHandler} />
						<label htmlFor="cat">고양이</label>
						<input type="radio" name="kind" id="all" onChange={changeHandler} />
						<label htmlFor="all">기타</label>
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
						<input
							type="radio"
							name="gender"
							id="male"
							onChange={changeHandler}
						/>
						<label htmlFor="male">남</label>
						<input
							type="radio"
							name="gender"
							id="female"
							onChange={changeHandler}
						/>
						<label htmlFor="female">여</label>
					</div>
					<div>
						<h5>품종</h5>
						<input
							type="text"
							name="breed"
							id="breed"
							onChange={changeHandler}
							required
						/>
						<h5>/&nbsp;&nbsp;&nbsp;&nbsp;나이</h5>
						<input
							type="text"
							name="age"
							id="age"
							onChange={changeHandler}
							required
						/>
					</div>
					<div>
						<h5>질병</h5>
						<input
							type="text"
							name="disease"
							id="disease"
							onChange={changeHandler}
							required
						/>
					</div>
					<div>
						<h5>훈련 여부</h5>
						<input
							type="radio"
							name="training"
							id="training_yes"
							onChange={changeHandler}
						/>
						<label htmlFor="training_yes">예</label>
						<input
							type="radio"
							name="training"
							id="training_no"
							onChange={changeHandler}
						/>
						<label htmlFor="training_no">아니오</label>
					</div>
					<div>
						<h5>중성화 여부</h5>
						<input
							type="radio"
							name="neutralization"
							id="neutralization_yes"
							onChange={changeHandler}
						/>
						<label htmlFor="neutralization_yes">예</label>
						<input
							type="radio"
							name="neutralization"
							id="neutralization_no"
							onChange={changeHandler}
						/>
						<label htmlFor="neutralization_no">아니오</label>
					</div>
					<div>
						<h5>검강검진</h5>
						<input
							type="radio"
							name="health"
							id="health_yes"
							onChange={changeHandler}
						/>
						<label htmlFor="health_yes">예</label>
						<input
							type="radio"
							name="health"
							id="health_no"
							onChange={changeHandler}
						/>
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
						<input
							type="file"
							name="img"
							id="fileInput"
							accept=".jpg, .jpeg, .png"
							onChange={changeHandler}
							required
							multiple
						/>
					</div>
					<div className="text-box">
						<h5>이별 사유</h5>
						<textarea name="text_reason" id="text_reason"></textarea>
					</div>
					<div className="text-box">
						<h5>특이 사항</h5>
						<textarea name="text_reason" id="text_etc"></textarea>
					</div>
				</FormText>
				<button type="submit">등록하기</button>
			</div>
		</PetRegistrationForm>
	);
};

export default PetRegistration;
