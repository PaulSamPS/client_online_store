import React from 'react'
import {CustomLinkProps} from './CustomLink.props'
import {Link, useMatch} from 'react-router-dom'
import cn from 'classnames'
import styles from './CustomLink.module.scss'

const CustomLink = ({children, className, to, ...props}: CustomLinkProps): JSX.Element => {
    const match = useMatch(to)
    return (
        <Link to={to} className={cn(styles.link, className ,{
            [styles.active]: match,
            [styles.notActive]: !match
        })} {...props}>
            {children}
        </Link>
    )
}

export default CustomLink