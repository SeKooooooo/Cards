import { Flex, Image, Typography } from 'antd';
import style from './Header.module.css';
import srcLogo from '../../accept/icons/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/authSlice';
import { Paths } from '../paths';
import { clear } from '../../features/pageSlice';

export const Header = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch(logout());
		dispatch(clear());
		navigate('/');
	};

	return (
		<Flex align="center" justify="space-between" className={style.header}>
			<NavLink to={Paths.main} className={style.logoLink}>
				<Image src={srcLogo} preview={false} className={style.logo} />
			</NavLink>
			<Flex gap="85px">
				<NavLink to="/profile">
					<Typography.Text className={style.link}>
						Profile
					</Typography.Text>
				</NavLink>
				<Typography.Text onClick={handleLogout} className={style.link}>
					Logout
				</Typography.Text>
			</Flex>
		</Flex>
	);
};
