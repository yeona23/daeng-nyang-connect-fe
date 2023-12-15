import React from 'react';
import { LoadingContents, LoadingText, LoadingWrap } from './Loading.style';

const Loading = () => {
	return (
		<LoadingWrap>
			<LoadingContents>
				<LoadingText>LOADING . . .</LoadingText>
				<img src="/assets/moving_paw.gif" alt="" />
			</LoadingContents>
		</LoadingWrap>
	);
};

export default Loading;
