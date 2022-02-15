import Slider from '../../components/Slider/Slider'
import TopProduct from '../../components/TopProduct/TopProduct'
import DayProduct from '../../components/DayProduct/DayProduct'
import ProductList from '../ProductList/ProductList'
import {IBrand} from '../../interfaces/brand.interface'
import {ShopProps} from './Shop.props'
import styles from './Shop.module.scss'

const Shop = ({products,brand}: ShopProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.topBar}>
                <Slider className={styles.slider}/>
                <DayProduct product={products}/>
            </div>
            <TopProduct className={styles.topProduct} product={products}/>
            <ProductList products={products}/>
            {brand.map((brand : IBrand) => <img key={brand.id} src={`http://localhost:5000/${brand.img}`} alt="12"/>)}
        </div>
    )
}

export default Shop
