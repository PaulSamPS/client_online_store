import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {IProduct} from '../../interfaces/product.interface'
import {IBrand} from '../../interfaces/brand.interface'

export interface ShopProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    products: IProduct[]
    brand: IBrand[]
}