import styles from './Shop.module.scss'
import Slider from "../../components/Slider/Slider";
import TopProduct from "../../components/TopProduct/TopProduct";
import React, {useEffect} from "react";
import DayProduct from "../../components/DayProduct/DayProduct";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getBrands} from "../../redux/actions/brandAction";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop = () => {
    const brand = useTypedSelector(state => state.brand.brand)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBrands())
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.topBar}>
                <Slider className={styles.slider}/>
                <DayProduct/>
            </div>
            <TopProduct className={styles.topProduct}/>
            <ProductCard/>
            {brand.map((b : any) => <img key={b.id} src={`http://localhost:5000/${b.img}`} alt="12"/>)}
        </div>
    )
}

export default Shop
