import React, {useState, MouseEvent} from 'react'
import {ReactComponent as CloseLogo} from './close.svg'
import {Input} from '../Input/Input'
import {Button} from '../Button/Button'
import {login} from '../../redux/actions/authAction'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {ModalLoginProps} from './ModalLogin.props'
import styles from './ModalLogin.module.scss'

const ModalLogin = ({closeModal}: ModalLoginProps): JSX.Element => {
    const dispatch = useAppDispatch()
    const [userName, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const auth = (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(login({userName,password}))
        closeModal()
    }

    return (
        <div className={styles.overlay} onClick={closeModal}>
            <form className={styles.content} onClick={(e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLFormElement>) => e.stopPropagation()}>
                <h2>Вход или регистрация</h2>
                <CloseLogo className={styles.close} onClick={closeModal}/>
                <Input
                    className={styles.inputLogin}
                    placeholder='Логин'
                    type='text'
                    onChange={e => setLogin(e.target.value)}
                    value={userName}
                />
                <Input
                    className={styles.inputPassword}
                    placeholder='Пароль'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <Button appearance='primary' onClick={auth}>Войти</Button>
            </form>
        </div>
    )
}

export default ModalLogin