import {IProduct} from '../../interfaces/product.interface'
import ProductCard from '../../components/ProductCard/ProductCard'
import {ProductListProp} from './ProductList.prop'

const ProductList = ({products}: ProductListProp) => {

    return (
        <div>
            {products.map((product: IProduct) => <ProductCard key={product.id} product={product}/>)}
        </div>
    )
}

export default ProductList