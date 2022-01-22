import React from 'react'
import {Navigate} from 'react-router-dom'
import {PrivateAuthProps} from './PrivateAuth.props'
import {SHOP_ROUTE} from '../routes/constants'

const PrivateAuth = ({children}: PrivateAuthProps) => {
    const isAuth = localStorage.getItem('AccessToken')

    if (!isAuth) {
        return <Navigate to={SHOP_ROUTE}/>
    }

    return children
}

export default PrivateAuth