import { Outlet } from 'react-router-dom';
import { Article } from './Mate.style';

const Mates = () => {
	return (
		<Article>
			<Outlet />
		</Article>
	);
};

export default Mates;
