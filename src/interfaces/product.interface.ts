interface IInfo {
    id: number
    title: string
    description: string
    productId: number
}

export interface IProduct {
    id: number
    img: string
    price: number
    oldPrice?: number
    typeId: number
    brandId: number
    name: string
    info: IInfo[]
    rating: number
}