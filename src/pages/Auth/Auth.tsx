import React, {useState} from 'react'
import {Input} from '../../components/Input/Input'
import {useForm} from 'react-hook-form'
import {IAuthForm, IAuthSentResponse, ILocation} from './Auth.interface'
import {Button} from '../../components/Button/Button'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../../routes/constants'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {login, registration, setErrorAuthMessage} from '../../redux/actions/authAction'
import styles from './Auth.module.scss'

export interface ILogin {
    id: number
    email: string
    role: string
    userName: string
}

const Auth = () => {
    const {errorMessage} = useTypedSelector(state => state.user)
    const { register,handleSubmit, formState: { errors, isValid }, reset  } = useForm<IAuthForm>({ mode: 'onChange' })
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const isLogin = pathname === LOGIN_ROUTE
    console.log(pathname)

    const navRegistration = () => {
        navigate(REGISTRATION_ROUTE)
    }

    const navLogin = () => {
        navigate(LOGIN_ROUTE)
    }

    const onSubmit = async ({password,userName}: IAuthForm) => {
        if (isLogin) {
            try {
                const res:ILogin = await dispatch(login({password, userName}))
                reset({email: '',password: '', userName: ''})
                navigate(SHOP_ROUTE)
            } catch (e: any) {
                if (e.response && e.response.data) {
                    return dispatch(setErrorAuthMessage(e.response.data.message))
                }
            }
        } else {
            try {
                const res:ILogin = await dispatch(registration({password, userName}))
                reset({email: '', password: '', userName: ''})
                navigate(SHOP_ROUTE)
            } catch (e: any) {
                if (e.response && e.response.data) {
                    return dispatch(setErrorAuthMessage(e.response.data.message))
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.auth}>
                <h3 className={styles.title}>{isLogin ? 'Авторизация' : 'Регистрация'}</h3>
                <Input
                    { ...register('userName', {
                        minLength: 3,
                        required: {
                            value:true, message: 'Введите login'
                        }
                    })}
                    placeholder='Login'
                    type='text'
                    className={styles.userName}
                    error={ errors.userName }
                />
                {!isLogin &&
                    <Input
                        { ...register('email', {
                            minLength: {
                                value: 3,
                                message: 'Длина не менее 3 символов'
                            },
                            required: {
                                value:true, message: 'Введите email'
                            },
                            pattern: {
                                value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Неверный формат email'
                            }
                        })}
                        placeholder='Email'
                        type='text'
                        className={styles.email}
                        error={ errors.email }
                    />
                }
                <Input
                    { ...register('password', {
                        minLength: {
                            value: 5,
                            message: 'Длина пароля не менее 5 символов'
                        },
                        required: {
                            value:true,
                            message: 'Введите пароль'
                        }
                    })}
                    placeholder='Пароль'
                    type='password'
                    className={styles.password}
                    error={ errors.password }
                />
                <div className={styles.bottom}>
                    {isLogin
                        ?
                        <span className={styles.acc}>Нет аккаунта?
                            <span className={styles.registration} onClick={navRegistration}>Регистрация</span>
                        </span>
                        :
                        <span className={styles.acc}>Есть аккаунт?
                            <span className={styles.registration} onClick={navLogin}>Войти</span>
                        </span>
                    }
                    <Button appearance='primary' className={styles.btn} disabled={!isValid}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
                </div>
            {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
            </div>
        </form>
    )
}

export default Auth
