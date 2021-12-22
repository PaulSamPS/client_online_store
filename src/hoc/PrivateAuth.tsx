import React from 'react'
import {useLocation,Navigate} from 'react-router-dom'
import {PrivateAuthProps} from './PrivateAuth.props'
import {LOGIN_ROUTE} from '../routes/constants'

const PrivateAuth = ({children}: PrivateAuthProps) => {
    const location = useLocation()
    const isAuth = true

    if (!isAuth) {
        return <Navigate to={LOGIN_ROUTE}/>
    }

    return children
}

export default PrivateAuth