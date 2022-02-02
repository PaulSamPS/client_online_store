import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {IProduct} from '../../interfaces/product.interface'

export interface CardItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProduct
    offset?: number
    appearance: 'topProduct' | 'dayProduct'
}