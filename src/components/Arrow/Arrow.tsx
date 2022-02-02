import React from 'react'
import {ReactComponent as ArrowLogo} from './arrow.svg'
import cn from 'classnames'
import {ArrowProps} from './Arrow.props'
import styles from './Arrow.module.scss'

const Arrow = ({className, appearance, background, ...props}: ArrowProps): JSX.Element => {
    return (
        <button className={cn(styles.btn, className, {
            [styles.arrowRight]: appearance == 'right',
            [styles.arrowLeft]: appearance == 'left',
            [styles.backgroundWhite]: background == 'white',
            [styles.backgroundNone]: background == 'none'
        })} {...props}>
            <ArrowLogo />
        </button>
    )
}

export default Arrow