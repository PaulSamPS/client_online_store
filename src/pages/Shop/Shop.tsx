import React, {useEffect} from 'react'
import Slider from '../../components/Slider/Slider'
import TopProduct from '../../components/TopProduct/TopProduct'
import DayProduct from '../../components/DayProduct/DayProduct'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import ProductCard from '../../components/ProductCard/ProductCard'
import {getProducts} from '../../redux/actions/productAction'
import {useLocation, useNavigate} from 'react-router-dom'
import {PRODUCT_ROUTE} from '../../routes/constants'
import {IBrand} from '../../interfaces/brand.interface'
import {IProduct} from '../../interfaces/product.interface'
import styles from './Shop.module.scss'

const Shop = (): JSX.Element => {
    const brand = useTypedSelector(state => state.brand.brand)
    const products = useTypedSelector(state => state.product.products)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.topBar}>
                <Slider className={styles.slider}/>
                <DayProduct product={products}/>
            </div>
            <TopProduct className={styles.topProduct} product={products}/>
            {products.map((product: IProduct) => <ProductCard key={product.id} product={product}/>)}
            {brand.map((brand : IBrand) => <img key={brand.id} src={`http://localhost:5000/${brand.img}`} alt="12"/>)}
            {products.map((product: IProduct) => <div key={product.id} className={styles.tv} onClick={() => navigate(`${PRODUCT_ROUTE}/${product.id}`)}>
                <li>{product.name}</li>
            </div>)}
        </div>
    )
}

export default Shop
