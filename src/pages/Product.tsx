import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useAppDispatch} from '../hooks/useAppDispatch'
import {getOneProduct} from '../redux/actions/productAction'
import {IProduct} from '../interfaces/product.interface'

const Product = () => {
    const oneProduct = useTypedSelector(state => state.product.oneProduct)
    const dispatch = useAppDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [id])

    return (
        <div>
            {oneProduct.map((product: IProduct) => <h1>{product.name}</h1>)}
        </div>
    )
}

export default Product