import { Navigate, useLocation } from 'react-router';
import { useAppSelector } from '../../app/hooks';
import { selectIsAuth } from '../../features/authSlice';

export const RequireAuth = ({children} : { children: JSX.Element }) =>{
	const location = useLocation()
	const isAuth = useAppSelector(selectIsAuth)
	if (!isAuth){
		return <Navigate to='/' state={{from: location}}/>
	}
	return children
}