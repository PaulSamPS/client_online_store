import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {Product} from '../../interface/product'

export interface CardItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: Product
    offset?: number
    appearance: 'topProduct' | 'dayProduct'
}