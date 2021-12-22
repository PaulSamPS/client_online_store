import React from 'react'
import {Outlet } from 'react-router-dom'
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "../routes/constants";
import CustomLink from "../components/CustomLink/CustomLink";
import styles from './Layout.module.scss'

const Layout = () => {
    return (
        <div className={styles.container}>
            <header className={styles.nav}>
                <CustomLink to={SHOP_ROUTE}>Магазин</CustomLink>
                <CustomLink to={PRODUCT_ROUTE+'1'}>Продукт</CustomLink>
                <CustomLink to={BASKET_ROUTE}>Корзина</CustomLink>
                <CustomLink to={ADMIN_ROUTE}>Админ</CustomLink>
                <CustomLink to={REGISTRATION_ROUTE}>Регистрация</CustomLink>
                <CustomLink to={LOGIN_ROUTE}>Логин</CustomLink>
            </header>
            <Outlet />
        </div>
    )
}

export default Layout