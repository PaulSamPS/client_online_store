import React from 'react'
import {authRoutes, publicRoutes} from './routes'
import {Route, Routes, Navigate} from 'react-router-dom'
import Layout from '../layout/Layout'
import NotFound from '../pages/NotFound'
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./constants";
import PrivateAuth from "../hoc/PrivateAuth";
import Shop from "../pages/Shop";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth/Auth";
import Basket from "../pages/Basket";
import Product from "../pages/Product";

const AppRoutes = () => {
    const isAuth = false
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                {authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<PrivateAuth><Component/></PrivateAuth>}/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                {/*<Route index element={<Shop/>}/>*/}
                {/*<Route path={ADMIN_ROUTE} element={<PrivateAuth><Admin/></PrivateAuth>}/>*/}
                {/*<Route path={BASKET_ROUTE} element={<PrivateAuth><Basket/></PrivateAuth>}/>*/}
                {/*<Route path={LOGIN_ROUTE} element={<Auth/>}/>*/}
                {/*<Route path={REGISTRATION_ROUTE} element={<Auth/>}/>*/}
                {/*<Route path={PRODUCT_ROUTE} element={<Product/>}>*/}
                {/*    <Route path={REGISTRATION_ROUTE} element={<Auth/>}/>*/}
                {/*</Route>*/}
                <Route path='*' element={<Navigate to={SHOP_ROUTE} replace/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes