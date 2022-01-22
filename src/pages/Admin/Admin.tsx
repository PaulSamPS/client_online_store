import CreateBrand from "../../components/AddBrand/CreateBrand";
import CreateType from "../../components/CreateType/CreateType";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import CustomLink from "../../components/CustomLink/CustomLink";
import {CREATE_BRAND_ROUTE, CREATE_PRODUCT_ROUTE, CREATE_TYPE_ROUTE} from "../../routes/AdminRoutes/constants";
import { Outlet } from "react-router-dom";
import styles from "./Admin.module.scss"

const Admin = () => {


    return (
        <div className={styles.admin}>
            <nav className={styles.nav}>
                <CustomLink to={CREATE_TYPE_ROUTE}>Добавить тип</CustomLink>
                <CustomLink to={CREATE_BRAND_ROUTE}>Добавить бренд</CustomLink>
                <CustomLink to={CREATE_PRODUCT_ROUTE}>Добавить продукт</CustomLink>
            </nav>
            <div className={styles.main}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Admin