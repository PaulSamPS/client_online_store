import {
    ADMIN_ROUTE,
    CART_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from './constants'
import Admin from '../pages/Admin/Admin'
import Cart from '../pages/Cart'
import Auth from '../pages/Auth/Auth'
import Product from '../pages/Product'
import Shop from '../pages/Shop/Shop'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CART_ROUTE,
        Component: Cart
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + ':id',
        Component: Product
    }
]