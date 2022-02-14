import React, {useEffect} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Layout from '../layout/Layout'
import PrivateAuth from '../hoc/PrivateAuth'
import Admin from '../pages/Admin/Admin'
import CreateType from '../components/CreateType/CreateType'
import CreateBrand from '../components/CreateBrand/CreateBrand'
import CreateProduct from '../components/CreateProduct/CreateProduct'
import Shop from '../pages/Shop/Shop'
import ProductInfo from '../pages/ProductInfo/ProductInfo'
import Cart from '../pages/Cart'
import CreateMenu from '../components/CreateMenu/CreateMenu'
import {useTypedSelector} from '../hooks/useTypedSelector'
import ProductList from '../pages/ProductList/ProductList'
import {useAppDispatch} from '../hooks/useAppDispatch'
import {getProducts} from '../redux/actions/productAction'

const AppRoutes = () => {
    const {userInfo} = useTypedSelector(state => state.user)
    const userRole = userInfo.role === 'ADMIN'
    const brand = useTypedSelector(state => state.brand.brand)
    const products = useTypedSelector(state => state.product.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Shop brand={brand} products={products}/>}/>
                <Route path='product' element={<ProductList products={products}/>}/>
                <Route path='product/:id' element={<ProductInfo/>}/>
                <Route path='cart' element={<PrivateAuth><Cart/></PrivateAuth>}/>
                {
                    userRole &&
                    <Route path='admin' element={<PrivateAuth><Admin/></PrivateAuth>}>
                        <Route path='create_type' element={<CreateType/>}/>
                        <Route path='create_brand' element={<CreateBrand/>}/>
                        <Route path='create_product' element={<CreateProduct/>}/>
                        <Route path='create_menu' element={<CreateMenu/>}/>
                    </Route>
                }
                <Route path='*' element={<Navigate to='/' replace/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes