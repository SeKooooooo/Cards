import { Navigate, useLocation } from 'react-router';
import { useAppSelector } from '../../app/hooks';
import { selectIsAuth } from '../../features/authSlice';

export const RequireAuth = <P extends object>(Component: React.ComponentType<P>) =>{
	return (props: P) =>{
		const location = useLocation()
		const isAuth = useAppSelector(selectIsAuth)
		if (!isAuth){
			return <Navigate to='/' state={{from: location}}/>
		}
		return <Component {...props}/>
	}
}