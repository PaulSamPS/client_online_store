import React, {useEffect, useState} from 'react'
import {Outlet} from 'react-router-dom'
import ModalLogin from "../components/ModalLogin/ModalLogin";
import Header from "./Header/Header";
import styles from './Layout.module.scss'
import Sidebar from "./Sidebar/Sidebar";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {getTypes} from "../redux/actions/typeAction";
import Slider from "../components/Slider/Slider";
import Shop from "../pages/Shop/Shop";
import ProductCard from "../components/ProductCard/ProductCard";

const Layout = () => {
    const [modal, setModal] = useState<boolean>(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <>
            {modal && <ModalLogin closeModal={closeModal}/>}
            <div className={styles.container}>
                <Header openModal={openModal} className={styles.top}/>
                <div className={styles.wrapper}>
                    <Sidebar className={styles.sidebar}/>
                    <div className={styles.body}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout