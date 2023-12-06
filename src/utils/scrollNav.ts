import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const scroll = () => {
	const location = useLocation();

	const [scrollPosition, setScrollPosition] = useState(0);
	const [transparent, setTransparent] = useState(false);

	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
	}, []);

	useEffect(() => {
		if (location.key === 'default' && scrollPosition > 100)
			setTransparent(true);
		else setTransparent(false);
	}, [scrollPosition]);
	return transparent;
};

export default scroll;
