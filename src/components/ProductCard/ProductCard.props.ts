import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {IProduct} from '../../interfaces/product.interface'

export interface ProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    product: IProduct
}