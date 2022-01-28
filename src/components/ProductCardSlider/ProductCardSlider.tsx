import React, {MouseEvent, useState} from 'react'
import styles from "./ProductCardSlider.module.scss"
import {ProductCardSliderProps} from "./ProductCardSlider.props";

const ProductCardSlider = ({image, offset,onMouseEnter}: ProductCardSliderProps) => {
    return (
        <div className={styles.imgSlide} style={{transform: `translateX(${offset}px)`}}>
            <img
                // onMouseMove={(e:any) => e.currentTarget.src = `http://localhost:5000/${image}`}
                src={`http://localhost:5000/${image}`}
                alt="product"
            />
        </div>
    )
}

export default ProductCardSlider