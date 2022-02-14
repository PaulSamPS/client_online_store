import {SidebarProps} from './Sidebar.props'
import { Link } from 'react-router-dom'
import {IMenu} from '../../interfaces/menu.interface'
import styles from './Sidebar.module.scss'

const Sidebar = ({className, menu}: SidebarProps) => {

    return (
        <div className={className}>
            {menu.map((menu: IMenu) => <span key={menu.id} className={styles.type}>
                <Link to='/'>
                    <span className={styles.svg} style={{backgroundImage: `url(http://localhost:5000/${JSON.parse(menu.img)})`}}/>
                    {menu.name}
                </Link>
            </span>)}
        </div>
    )
}

export default Sidebar