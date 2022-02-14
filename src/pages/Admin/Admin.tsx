import CustomLink from '../../components/CustomLink/CustomLink'
import { Outlet } from 'react-router-dom'
import styles from './Admin.module.scss'

const Admin = () => {

    return (
        <div className={styles.admin}>
            <nav className={styles.nav}>
                <CustomLink to='create_type'>Добавить тип</CustomLink>
                <CustomLink to='create_brand'>Добавить бренд</CustomLink>
                <CustomLink to='create_product'>Добавить продукт</CustomLink>
                <CustomLink to='create_menu'>Добавить пункт меню</CustomLink>
            </nav>
            <div className={styles.main}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Admin