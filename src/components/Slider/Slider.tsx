import React, {useEffect, useState} from 'react';
import styles from './Slider.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {ReactComponent as ArrowIcon} from "./arrow.svg";
import {Link, useNavigate} from "react-router-dom";
import cn from "classnames";
import {SliderProps} from "./Slider.props";
import Arrow from "../Arrow/Arrow";
import Dots from "../Dots/Dots";

const Slider = ({className}:SliderProps) => {
    const p = useTypedSelector(state => state.product.tv)
    const [offset, setOffset] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)

    const sliderTop = [
            {"id": 0, "img": "https://static.eldorado.ru/upload/newbx/a9f/a9f9907b6fef0b52093a5cba8b5b1302.png/resize/660x300/", "type": 'cart'},
            {"id": 1, "img": "https://static.eldorado.ru/upload/newbx/636/636426a6dcf4c6954ec6f4610e0a1daf.png/resize/660x300/", "type": 'login'},
            {"id": 2, "img": "https://static.eldorado.ru/upload/newbx/582/5820494fd78bfcc5137097760c493c0e.png/resize/660x300/", "type": 'registration'},
            {"id": 3, "img": "https://static.eldorado.ru/upload/newbx/9c3/9c3cb9dfb9f7b84e63d1d54ebe2b21a3.jpg/resize/660x300/", "type": 'cart'},
            {"id": 4, "img": "https://static.eldorado.ru/upload/newbx/b18/b1841bda587934660e832f28d1cdb69e.png/resize/660x300/", "type": 'cart'}
    ]

    const IMG_WIDTH = 660

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((currentOffset) => {
                return Math.max(currentOffset - IMG_WIDTH, - (IMG_WIDTH * (sliderTop.length - 1)))
            })
            setSlideIndex(slideIndex => slideIndex +1)
        }, 5000)
        return () => clearInterval(interval)
    }, [slideIndex])

    if (slideIndex === sliderTop.length) {
        setSlideIndex(0)
        setOffset(0)
    }

    const right = () => {
        if (slideIndex === sliderTop.length) {
            setSlideIndex(0)
            setOffset(0)
        } else {
            setOffset((currentOffset) => {
                return Math.max(currentOffset - IMG_WIDTH, - (IMG_WIDTH * (sliderTop.length - 1)))
            })
            setSlideIndex(slideIndex + 1)
        }
    }

    const left = () => {
        setOffset((currentOffset) => {
            return Math.min(currentOffset + IMG_WIDTH, 0)
        })
        setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1)
    }

    const dots = (index: any) => {
        setSlideIndex(index)
        setOffset(-(index * IMG_WIDTH))
    }

    return (
       <div className={styles.sliderBlock}>
           <h2>Новые акции</h2>
           <div className={cn(styles.sliderWrapper, className)}>
               {sliderTop.map((slide: any, index) =>
                   <div
                       className={styles.slider}
                       key={slide.id}
                       style={{transform: `translateX(${offset}px)`}}
                   >
                       <Link to={slide.type}>
                           <img src={slide.img} alt="slide" />
                       </Link>
                   </div>
               )}
               <Arrow appearance='left' background='white' onClick={left}/>
               <Arrow appearance='right' background='white' onClick={right}/>
           </div>
           <div className={styles.bl}>
               {/*{sliderTop.map((s:any,index) => <button onClick={() => dots(index)} key={s.id} >*/}
               {/*    <span className={cn(styles.dots, {*/}
               {/*        [styles.active]: slideIndex === index*/}
               {/*    })}/>*/}
               {/*</button>)}*/}
               <Dots slideIndex={slideIndex} dots={dots} arr={sliderTop}/>
           </div>
       </div>
    )
}

export default Slider