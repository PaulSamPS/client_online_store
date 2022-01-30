import {DetailedHTMLProps, HTMLAttributes} from 'react'

interface IInfo {
    title: string
    description: string
    id: number
    tvId: number
}

interface IImg {
    filename: string
}

interface ITvs {
    id: number
    name: string
    rating: number
    img: string
    price: number
    oldPrice: number
    brandId: number
    typeId: number
    info: IInfo[]
}

export interface CardItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ITvs
    offset?: number
    appearance: 'topProduct' | 'dayProduct'
}