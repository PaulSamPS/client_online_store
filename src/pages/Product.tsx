import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {getOneTv, getTv} from "../redux/actions/productAction";

const Product = () => {
    const oneTv = useTypedSelector(state => state.product.oneTv)
    const [tv , setTv] = useState(null)
    const dispatch = useAppDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getOneTv(id))
    }, [id])

    // console.log(oneTv)
    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    )
}

export default Product