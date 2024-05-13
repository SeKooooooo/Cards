import { Form, Input, Typography } from 'antd';
import styles from './ProfileInput.module.css'
import { UserInfo } from '../../../utils/UserInfo';
import { Dispatch, SetStateAction, useState } from 'react';


type Props = {
	name: string 
	required: boolean | null
	value: string | null | number
	userChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	label: string
}

export function ProfileInput({name,required, value, userChange, label}: Props){

	return(
		<Form.Item className={styles.item} name={name || ''}>
			<Typography.Text className={styles.label}>{label}</Typography.Text>
			<Input className={styles.input} defaultValue={value || ''}  name={name || ''} required={required || false} onChange={(e)=> userChange(e)}/>
		</Form.Item>
	)
}