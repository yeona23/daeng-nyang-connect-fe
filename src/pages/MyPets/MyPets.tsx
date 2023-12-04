import { Outlet } from 'react-router-dom';
import { Article } from './MyPets.style';

const MyPets = () => {
	return (
		<Article>
			<Outlet />
		</Article>
	);
};

export default MyPets;
