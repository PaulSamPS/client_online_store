import React from 'react'
import {
    ADMIN_ROUTE,
    CART_ROUTE,
    CREATE_BRAND_ROUTE,
    CREATE_MENU_ROUTE,
    CREATE_PRODUCT_ROUTE,
    CREATE_TYPE_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from './constants'
import {Route, Routes, Navigate} from 'react-router-dom'
import Layout from '../layout/Layout'
import PrivateAuth from '../hoc/PrivateAuth'
import Admin from '../pages/Admin/Admin'
import CreateType from '../components/CreateType/CreateType'
import CreateBrand from '../components/CreateBrand/CreateBrand'
import CreateProduct from '../components/CreateProduct/CreateProduct'
import Shop from '../pages/Shop/Shop'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import CreateMenu from '../components/CreateMenu/CreateMenu'
import {useTypedSelector} from '../hooks/useTypedSelector'

const AppRoutes = () => {
    const {userInfo} = useTypedSelector(state => state.user)
    const userRole = userInfo.role === 'ADMIN'

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Shop/>}/>
                <Route path={PRODUCT_ROUTE} element={<Product/>}/>
                <Route path={CART_ROUTE} element={<PrivateAuth><Cart/></PrivateAuth>}/>
                {
                    userRole &&
                    <Route path={ADMIN_ROUTE} element={<PrivateAuth><Admin/></PrivateAuth>}>
                        <Route path={CREATE_TYPE_ROUTE} element={<CreateType/>}/>
                        <Route path={CREATE_BRAND_ROUTE} element={<CreateBrand/>}/>
                        <Route path={CREATE_PRODUCT_ROUTE} element={<CreateProduct/>}/>
                        <Route path={CREATE_MENU_ROUTE} element={<CreateMenu/>}/>
                    </Route>
                }
                <Route path='*' element={<Navigate to={SHOP_ROUTE} replace/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes