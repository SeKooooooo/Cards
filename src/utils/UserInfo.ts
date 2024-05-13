export type UserInfo={
	id:string | null
	username:string | null,
	email:string | null,
	password:string | null,
	avatar: string | null
	[key: string]: string | null
}

export const defaultUser={
	id: null,
	username:null,
	email:null,
	password:null,
	avatar:null
}