import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Layout from '../layout/Layout'
import {
    ADMIN_ROUTE,
    CART_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from './constants'
import PrivateAuth from '../hoc/PrivateAuth'
import Admin from "../pages/Admin/Admin";
import {CREATE_BRAND_ROUTE, CREATE_PRODUCT_ROUTE, CREATE_TYPE_ROUTE} from "./AdminRoutes/constants";
import CreateType from "../components/CreateType/CreateType";
import CreateBrand from "../components/AddBrand/CreateBrand";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import Shop from "../pages/Shop/Shop";
import Product from "../pages/Product";
import Auth from "../pages/Auth/Auth";
import Cart from "../pages/Cart";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRoutes = () => {
    const {userInfo} = useTypedSelector(state => state.user)

    const userRole = userInfo.role === 'ADMIN'
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Shop/>}/>
                <Route path={PRODUCT_ROUTE} element={<Product/>}/>
                <Route path={CART_ROUTE} element={<PrivateAuth><Cart/></PrivateAuth>}/>
                <Route path={LOGIN_ROUTE} element={<Auth/>}/>
                <Route path={REGISTRATION_ROUTE} element={<Auth/>}/>
                {
                    userRole &&
                    <Route path={ADMIN_ROUTE} element={<PrivateAuth><Admin/></PrivateAuth>}>
                        <Route path={CREATE_TYPE_ROUTE} element={<CreateType/>}/>
                        <Route path={CREATE_BRAND_ROUTE} element={<CreateBrand/>}/>
                        <Route path={CREATE_PRODUCT_ROUTE} element={<CreateProduct/>}/>
                    </Route>
                }
                <Route path='*' element={<Navigate to={SHOP_ROUTE} replace/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes