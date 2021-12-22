import React from 'react'
import {Input} from '../../components/Input/Input'
import {useForm} from "react-hook-form";
import {IAuthForm} from "./Auth.interface";
import styles from './Auth.module.scss'
import {Button} from "../../components/Button/Button";

const Auth = () => {
    const { register, control, handleSubmit, formState: { errors }, reset  } = useForm<IAuthForm>()
    return (
        <form>
            <div className={styles.auth}>
                <Input
                    { ...register('email', { required: { value:true, message: 'Введите email' }}) }
                    placeholder='Email'
                    type='text'
                    className={styles.email}
                    error={ errors.email }
                />
                <Input
                    { ...register('password', { required: { value:true, message: 'Введите пароль' }}) }
                    placeholder='Пароль'
                    type='password'
                    className={styles.password}
                    error={ errors.password }
                />
                <Button appearance='primary' className={styles.btn}>Войти</Button>
            </div>
        </form>
    )
}

export default Auth