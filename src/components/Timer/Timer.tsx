import React, {useEffect, useState} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setDayProducts, setDayProductsClear} from "../../redux/actions/dayProductsAction";
import styles from './Timer.module.scss'
import {TimerProps} from "./Timer.props";
import cn from "classnames";

const Timer = ({className, ...props}: TimerProps): JSX.Element => {
    const hour = 24 - new Date().getHours() - 1
    const min = 60 - new Date().getMinutes() -1
    const sec = 60 - new Date().getSeconds()
    const [active, setActive] = useState(false)
    const [ hours, setHours ] = useState(hour)
    const [ minutes, setMinutes ] = useState(min)
    const [seconds, setSeconds ] =  useState(sec)
    const product = useTypedSelector(state => state.product.products)
    const dispatch = useAppDispatch()


    const updateDayProducts = () => {
        dispatch(setDayProductsClear([]))
        let p = product.map(item => item)
        for (let i = 0; i < 5; i++) {
            let ind = Math.floor(Math.random() * p.length)
            const item = p[ind]
            if (item.oldPrice !== null) {
            dispatch(setDayProducts(p.splice(ind, 1)[0]))}
        }
    }

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        updateDayProducts()
                        setHours(23)
                        setMinutes(59)
                        setSeconds(59)
                    } else {
                        setHours(hours - 1)
                        setMinutes(59)
                        setSeconds(59)
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                    setActive(false)
                }
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval)
        }
    })

    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            {active && <h1>timer</h1>}
            <span className={styles.timer} onClick={updateDayProducts}>
                {hours < 10 ?  `0${hours}` : hours}: {minutes < 10 ?  `0${minutes}` : minutes}: {seconds < 10 ?  `0${seconds}` : seconds}
            </span>
        </div>
    )
}


export default Timer