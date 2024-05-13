import { UserInfo } from './UserInfo';

export interface AuthState  {
	userInfo:UserInfo;
	isAuth: boolean;
	token: string
}
