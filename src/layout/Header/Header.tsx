import React from 'react'
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {ReactComponent as UserLogo} from "./user.svg";
import {ADMIN_ROUTE, CART_ROUTE, SHOP_ROUTE} from "../../routes/constants";
import {ReactComponent as CartLogo} from "./cart.svg";
import {ReactComponent as SearchLogo} from "./search.svg";
import {ReactComponent as LogoIcon} from "./logo.svg";
import {HeaderProps} from "./Header.props";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import styles from './Header.module.scss';

const Header = ({openModal}: HeaderProps) => {
    const name = useTypedSelector(state => state.user.userInfo)
    const isAuth = localStorage.getItem('AccessToken')
    const navigate = useNavigate()

    const {userInfo} = useTypedSelector(state => state.user)

    const userRole = userInfo.role === 'ADMIN'

    const logout = () => {
        localStorage.clear()
        navigate(SHOP_ROUTE)
    }

    return (
        <div className={styles.header}>
            <img
                src='https://static.eldorado.ru/espa/1.35.17-WtslTG2khlq9S4hFe2rsX/static_spa/assets/logo.0.107e1872.svg'
                alt='logo'
                className={styles.logo}
                onClick={() => navigate(SHOP_ROUTE)}
            />
            <div className={styles.search}>
                <Input
                    placeholder='Поиск'
                    type='search'
                />
                <Button appearance='primary' className={styles.searchBtn}>
                    Поиск
                    <SearchLogo className={styles.searchLogo}/>
                </Button>
            </div>
            {!isAuth
                ?
                    <div className={styles.profile}>
                        <div className={styles.login} onClick={openModal}>
                            <UserLogo/>
                            <p>Вход или регистрация</p>
                        </div>
                    </div>
                :
                    <div className={styles.profile}>
                        <div className={styles.login}>
                            <UserLogo/>
                            <p>{name.userName}</p>
                        </div>
                        {userRole && <span onClick={() => navigate(ADMIN_ROUTE)} className={styles.logout}>Админ</span>}
                        <span onClick={logout} className={styles.logout}>Выйти</span>
                    </div>
            }
            <div className={styles.cart} onClick={() => navigate(CART_ROUTE)}>
                <CartLogo/>
                <p>Корзина</p>
            </div>
        </div>
    )
}

export default Header