import React, {useEffect, useState} from 'react';
import styles from "./Dots.module.scss";
import cn from "classnames";
import {DotsProps} from "./Dots.props";

const Dots = ({slideIndex,dots,arr,className,...props}: DotsProps) => {
    const [dotsArray, setDotsArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
    useEffect(() => {
        constructDots(slideIndex)
    },[slideIndex])
    const constructDots = (slideIndex: number) => {
        const updateDots = arr.map((s: JSX.Element,index) => {
            return (
                <button onClick={() => dots(index)}>
                   <span className={cn(styles.dots, {
                       [styles.active]: slideIndex === index
                   })}/>
                </button>
            )
        })
        setDotsArray(updateDots)
    }

    return (
        <div {...props} className={styles.dots}>
            {dotsArray.map((s, i) => <span key={i}>{s}</span>)}
        </div>
    );
};

export default Dots;