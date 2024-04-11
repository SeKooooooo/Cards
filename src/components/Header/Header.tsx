import { Flex, Image, Typography } from 'antd';
import style from './Header.module.css'
import srcLogo from '../../assept/icons/logo.svg'
import { NavLink } from 'react-router-dom';

export function Header() {

	const handleLogout = () =>{
		console.log('exit')
	}

	return (
		<Flex align='center' justify='space-between' className={style.header}>
			<NavLink to='/main' className={style.logoLink}>
				<Image src={srcLogo} preview={false}  className={style.logo}/>
			</NavLink>
			<Flex gap='85px'>
				<NavLink to='/profile'>
					<Typography.Text className={style.link}>
						Profile
					</Typography.Text>
				</NavLink>
				<Typography.Text onClick={handleLogout} className={style.link}>
					Logout
				</Typography.Text>
			</Flex>
		</Flex>
	)
}