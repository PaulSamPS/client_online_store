import styles from './Shop.module.scss'
import Slider from "../../components/Slider/Slider";
import TopProduct from "../../components/TopProduct/TopProduct";
import React, {useEffect} from "react";
import DayProduct from "../../components/DayProduct/DayProduct";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getBrands} from "../../redux/actions/brandAction";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getTv} from "../../redux/actions/productAction";
import {useLocation, useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../routes/constants";

const Shop = () => {
    const brand = useTypedSelector(state => state.brand.brand)
    const tv = useTypedSelector(state => state.product.tv)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {pathname} = useLocation()
    useEffect(() => {
        dispatch(getTv())
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.topBar}>
                <Slider className={styles.slider}/>
                <DayProduct tv={tv}/>
            </div>
            <TopProduct className={styles.topProduct}/>
            {tv.map((t : any) => <ProductCard key={t.id} tv={t}/>)}
            {brand.map((b : any) => <img key={b.id} src={`http://localhost:5000/${b.img}`} alt="12"/>)}
            {tv.map((t: any) => <div key={t.id} className={styles.tv} onClick={() => navigate(`tv/${t.id}`)}>
                <li>{t.name}</li>
            </div>)}
        </div>
    )
}

export default Shop
