import React, {useEffect} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.scss'
import {ReactComponent as TvLogo} from "./tv.svg";
import {ReactComponent as PhonesLogo} from "./smartPhones.svg";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getMenu} from "../../redux/actions/menuAction";
import { Link } from 'react-router-dom';

interface Type {
    id: number
    name: string
    img: string
    link: string
}

const Sidebar = ({className}: SidebarProps) => {
    const {menu} = useTypedSelector(state => state.menu)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMenu())
    },[])

    // const sidebar = [
    //     {"id": 0, "name": "Телевизоры, аудио, видео"},
    //     {"id": 1, "name": "Смартфоны и гаджеты"},
    //     {"id": 2, "name": "Компьютеры и ноутбуки"},
    // ]
    console.log(menu)
    return (
        <div className={className}>
            {menu.map((t:Type) => <span key={t.id} className={styles.type}>
                {/*<img src={`http://localhost:5000/${t.img}`} alt="icon" className={styles.icon}/>*/}
                <Link to={t.link}>
                    <span className={styles.svg} style={{backgroundImage: `url(http://localhost:5000/${t.img})`}}/>
                    {t.name}
                </Link>
            </span>)}
        </div>
    )
}

export default Sidebar